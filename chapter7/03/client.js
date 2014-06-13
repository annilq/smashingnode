// get请求
var qs = require("querystring"),
  http = require("http");
  http.get({
    host: "127.0.0.1",
    port: 3000,
    url: "/",
  }, function(res) {
    var body="";
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
      body += chunk;
    });
    res.on("end", function() {
      console.log(body);
    });
  }).end();
