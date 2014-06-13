var time = function(opts) {
  var time = opts.time || 100;
  return function(req, res, next) {
    console.log("the setting time is: %s",time);
    var timer = setTimeout(function() {
      console.log(" %s %s is takeing to much time", req.method, req.url);
    }, time);
    var end = res.end;
    res.end = function(chunk, encoding) {
      res.end = end;
      res.end(chunk, encoding);
      clearTimeout(timer);
    };
    next();
  };
};
module.exports = time;