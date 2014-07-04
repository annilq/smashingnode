// var url="httpsell";
// var reg=/^http(\w+)/g;
var url = "http://www.cpc.dev/search/index/sort/sell.html";
var reg = /^http\:\/\/www\.cpc\.dev\/((\w+\/)*)\w+\.html$/g;
// var reg = /^http\:\/\/www\.cpc\.dev(\/\w+)(\/\w+)(\/\w+)/g;
var ifs = reg.test(url);
//console.log(ifs);
var newurl = url.replace(reg, function(a,b,c) {
	console.log(arguments);
	return b;
});
console.log(newurl);