date1 = Date.now();
var fabonacci = function() {
	var memo = [0, 1];
	var fib = function(n) {
		var result = memo[n];
		if (typeof result !== "number") {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
 }();

/*var fabonacci = function(n) {
	return n < 2 ? n : fabonacci(n - 1) + fabonacci(n - 2);
};*/
console.log(fabonacci(40));
date2 = Date.now();
console.log(date2 - date1);