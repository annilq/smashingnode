var handle={};
handle.name=function(){
	console.log("name call");
	return "annilq";
};
handle.age=function(){
	console.log("age call");
	return 25;
};
exports.handle=handle;