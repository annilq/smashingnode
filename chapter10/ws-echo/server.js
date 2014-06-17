var express = require("express"),
	wsio = require("websocket.io");
var app = express.createServer();
app.use(express.static("public"));
var ws = wsio.attach(app);
ws.on("connection", function(socket) {
	console.log("msg");
	socket.on("message", function(msg) {
		console.log(msg);
		socket.send("pong");
	});
});
app.listen(3000);