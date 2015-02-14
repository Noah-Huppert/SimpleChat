/* Require */
var path = require("path");

var express = require("express");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io")(server);

/* Config */
var config = {
  port: process.env.PORT || 3000
};

app.use("/js", express.static(`${__dirname}/public`));

/* App */
app.get("/", function(req, res){
  res.sendFile(path.resolve(`${__dirname}/../index.html`));
});

/* Start */
app.listen(config.port, function(){
  console.log(`App running on port ${config.port}`);
});
