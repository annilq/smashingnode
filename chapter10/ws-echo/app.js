var express = require("express"),
	http = require('http'),
	wsio = require("websocket.io");
var app = express();
app.use(express.static("public"));


/*var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end([
		'<h1>websocket</h1><h2>lateny: <span id="latency"></span>ms</h2>',
		'<script>',
		'lastMessage = +new Date;',
		'var ws = new WebSocket("ws://127.0.0.1:3000");',
		'ws.onopen = function() {ping();};',
		'ws.onmessage = function(ev){document.getElementById("latency").innerHTML = new Date - lastMessage;ping();};',
		'function ping() {lastMessage = +new Date;ws.send("ping");}',
		'</script>'
	].join(''));
});*/
//var ws = wsio.attach(server);
var ws = wsio.attach(app);
ws.on("connection", function(socket) {
	console.log("msg");
	socket.on("message", function(msg) {
		console.log(msg.data);
		socket.send("pong");
	});
});
//server.listen(3000);
app.listen(3000);