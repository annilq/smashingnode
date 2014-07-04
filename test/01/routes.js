var handle=require("./handle").handle;
var routes=[];
var use=function (path,hand) {
	routes.push([path,hand]);
};
use("/user/name",handle.name);
use("/user/age",handle.age);
exports.routes=routes;