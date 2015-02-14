"use 6to5";

/* Require */
var express = require("express");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io")(server);

/* Config */
var config = {
  port: process.env.PORT || 3000
};

app.use("/libs", express.static(__dirname + "/libs"));
app.use("/src/js/public", express.static(__dirname + "/js"));

/* App */
app.get("/", function(req, res){
  res.sendfile("./src/index.html");
});

/* Start */
app.listen(config.port, function(){
  console.log(`App running on port ${config.port}`);
});
