date1 = Date.now();

function factorial(i, a) {
	var a = a || 1;
	if (i < 2) {
		return a;
	} else {
		return a = factorial(i - 1, a + i);
	}
}
var result = factorial(400);
console.log(result);
date2 = Date.now();
console.log("time is %d",date2 - date1);