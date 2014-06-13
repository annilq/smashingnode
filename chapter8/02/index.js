var connect = require("connect");
var server = connect(connect.bodyParser(), connect.static("static"));
server.use(function(req, res, next) {
	console.log(req.body.fil);
	if (req.method == "POST") {
		//console.log(req.body.file);
	} else {
		next();
	}

});
server.use(function(req, res, next) {
	res.writeHead(200);
	res.end("anilq");
});
server.listen(3000);