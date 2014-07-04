var http = require("http"),
	url = require("url"),
	routes = require("./routes").routes;
http.createServer(function(req, res) {
	pathname = url.parse(req.url, true).pathname;
	for (var i = 0; i < routes.length; i++) {
		route = routes[i];
		console.log(route);
		console.log(pathname);
		if (pathname ==route[0]) {
			route[1]();
		}
	}
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end("Hello world");

}).listen("3000", "127.0.0.1");