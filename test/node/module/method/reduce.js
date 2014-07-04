var func = require("./method");
function add(a, b) {
	return a + b;
}
function mult(a, b) {
	return a * b;
}
var paom = [2, 2, 3, 7].reduce(mult, 1);
var paom1 = [2, 2, 3, 7].reduce(add, 1);
console.log(paom);
console.log(paom1);