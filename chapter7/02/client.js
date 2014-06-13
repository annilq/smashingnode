var qs = require("querystring"),
  http = require("http");

function send(thename) {
  http.request({
    host: "127.0.0.1",
    port: 3000,
    url: "/",
    method: "POST"
  }, function(res) {
    var body="";
     console.log("request complete");
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
      body += chunk;
    });
    res.on("end", function() {
      console.log(body);
      process.stdout.write("\n your name:");
    });
  }).end(
    qs.stringify({
      name: thename
    }));
}
//end 里面的对象是参数
process.stdout.write("\n your name:");
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on("data", function(name) {
  send(name.replace('\n', ''));
});