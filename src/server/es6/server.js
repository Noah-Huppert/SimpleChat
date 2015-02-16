/* Require */
var path = require("path");

var express = require("express");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io")(server);

/* Config */
var config = {
  port: process.env.PORT || 9000
};

/*app.use("/jspm", express.static(path.resolve(`${__dirname}/../../jspm_packages`)));
app.use("/jspm-config", express.static(`${__dirname}/../jspm`));
app.use("/js", express.static(`${__dirname}/public`));
app.use("/css", express.static(path.resolve(`${__dirname}/../css`)));*/

var clientDirPath = path.resolve(`${__dirname}/../../client`);
console.log(clientDirPath);
app.use("/client", express.static(clientDirPath));

/* App */
app.get("/", function(req, res){
  res.sendFile(`${clientDirPath}/index.html`);
});

io.on("connection", function(socket){

});

/* Start */
app.listen(config.port, function(){
  console.log(`App running on port ${config.port}`);
});
