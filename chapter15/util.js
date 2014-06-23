(function(module) {
  var util = {};
  util.add = function(a, b) {
    return a + b;
  };
  util.cheng = function(a, b) {
    return a * b;
  };
  module.exports = util;
  if (typeof window !== 'undefined') {
     window.util =  module.exports;
  }
})("undefined" == typeof module ? {
  module: {
    exports: {}
  }
} : module);