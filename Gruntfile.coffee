module.exports = (grunt) ->
  taskPrefix = if grunt.option "newer" then "newer:" else ""
  livereload = grunt.option "livereload"

  tasks = (tasks...) ->
    newTasks = []
    for task in tasks
      newTasks.push taskPrefix + task

    return newTasks

  grunt.initConfig
    browserify:
      options:
        transform: ["6to5ify"]
      deps:
        files:
          "src/js/public/deps.js": "src/es6/public/deps.jsx"
      app:
        files:
          "src/js/public/client.js": "src/es6/public/client.jsx"
        options:
          ignore: "src/es6/public/deps.jsx"

    "6to5":
      server:
        files: [
          expand: true,
          cwd: "src/es6",
          src: ["**/*.js"],
          dest: "src/js",
          ext: ".js"
        ]
        options:
          ignore: "src/es6/public"

    less:
      styles:
        files: [
          expand: true,
          cwd: "src/less",
          src: ["**/*.less"],
          dest: "src/css",
          ext: ".css"
        ]

    nodemon:
      server:
        script: "src/js/server.js"
        options:
          watch: ["src/js/server.js"]

    watch:
      deps:
        files: "src/es6/public/deps.jsx"
        tasks: tasks "browserify:deps"
      app:
        files: ["src/es6/public/**/*.jsx", "!src/es6/public/deps.js"]
        tasks: tasks "browserify:app"
      server:
        files: ["src/es6/**/*.js", "!src/es6/public/**/*"]
        tasks: tasks "6to5:server"
      styles:
        files: "src/less/**/*.less"
        tasks: tasks "less:styles"
      options:
        livereload: true

  grunt.loadNpmTasks "grunt-browserify"
  grunt.loadNpmTasks "grunt-newer"
  grunt.loadNpmTasks "grunt-6to5"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-less"
  grunt.loadNpmTasks "grunt-nodemon"

  grunt.registerTask "default", ["deps", "app", "server", "styles"]
  grunt.registerTask "deps", tasks "browserify:deps"
  grunt.registerTask "app", tasks "browserify:app"
  grunt.registerTask "server", tasks "6to5:server"
  grunt.registerTask "server-watch", "nodemon:server"
  grunt.registerTask "styles", tasks "less:styles"
