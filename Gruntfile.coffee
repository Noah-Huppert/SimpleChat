module.exports = (grunt) ->
  taskPrefix = if grunt.option "newer" then "newer:" else ""
  livereload = grunt.option "livereload"

  tasks = (tasks...) ->
    newTasks = []
    for task in tasks
      newTasks.push taskPrefix + task

    return newTasks

  grunt.initConfig
    babel:
      options:
        sourceMap: true
        modules: ["common"]
      client:
        files: [
          expand: true
          cwd: "src/client/es6"
          src: ["**/*.jsx"]
          dest: "src/client/js"
          ext: ".js"
        ]
      server:
        files: [
          expand: true
          cwd: "src/server/es6"
          src: ["**/*.js"]
          dest: "src/server/js"
          ext: ".js"
        ]

    less:
      styles:
        files: [
          expand: true
          cwd: "src/client/less"
          src: ["**/*.less"]
          dest: "src/client/css"
          ext: ".css"
        ]

    nodemon:
      server:
        script: "src/server/js/server.js"
        options:
          watch: ["src/server/js/server.js"]

    watch:
      client:
        files: "src/client/es6/**/*.jsx"
        tasks: "client"
      server:
        files: "src/server/es6/**/*.js"
        task: "server"
      styles:
        files: "src/less/**/*.less"
        tasks: "styles"
      options:
        livereload: true

  grunt.loadNpmTasks "grunt-newer"
  grunt.loadNpmTasks "grunt-babel"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-newer"
  grunt.loadNpmTasks "grunt-contrib-less"
  grunt.loadNpmTasks "grunt-nodemon"

  grunt.registerTask "default", ["client", "server","styles"]
  grunt.registerTask "client", tasks "babel:client"
  grunt.registerTask "server", tasks "babel:server"
  grunt.registerTask "server-watch", "nodemon:server"
  grunt.registerTask "styles", tasks "less:styles"
