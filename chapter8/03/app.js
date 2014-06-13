//connect会话
var users = require("./users"),
  connect = require("connect");
var server = connect(connect.logger("dev"), connect.bodyParser(), connect.cookieParser(), connect.session({
  secret: "my app secret"
}));
server.use(function(req, res, next) {
  if ('/' == req.url && req.session.logged_in) {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    res.end(req.session.name + ": nice to meet you ");
  } else {
    next();
  }
});
//get method
server.use(function(req, res, next) {
  if ('/' == req.url && "GET" == req.method) {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    res.end(['<form action="/login" method="POST">',
      '<fieldset>',
      '<legend>please login in</legend>',
      '<p>user:<input type="text" name="user" value="" placeholder=""></p>',
      '<p>password:<input type="password" name="password" placeholder=""></p>',
      '<button>submit</button>',
      '</fieldset>',
      '</form>'
    ].join(""));
  } else {
    next();
  }
});
//post method
server.use(function(req, res, next) {
  if ('/login' == req.url && "POST" == req.method) {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    // 这里用户名要输入tobe,昵称是annilq
    if (!users[req.body.user] || req.body.password != users[req.body.user].password) {
      res.end("bad username /password");
    } else {
      req.session.logged_in = true;
      req.session.name = users[req.body.user].name;
      res.end("Aurhenticated");
    }
  } else {
    next();
  }
});
server.use(function(req, res, next) {
  if ('/login' == req.url && "POST" == req.method) {
    res.writeHead(200);
    // 这里用户名要输入tobe,昵称是annilq
    if (!users[req.body.user] || req.body.password != users[req.body.user].password) {
      res.end("bad username /password");
    } else {
      req.session.logged_in = true;
      req.session.name = users[req.body.user].name;
      res.end("Aurhenticated");
    }
  } else {
    next();
  }
});
server.use(function(req, res, next) {
  if ('/logout' == req.url) {
    req.session.logged_in = false;
    res.writeHead(200);
    res.end("loged out");
  } else {
    next();
  }
});

server.listen(3000);