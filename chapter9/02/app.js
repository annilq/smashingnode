/**
 * Module dependencies.
 */

var express = require('express'),
	blog = require('./blog'),
	pages = require('./pages'),
	tags = require('./tags'),
	http = require('http');

var app = express();
//blog route
app.get("/blog", blog.home);
app.get("/blog/search", blog.search);
app.get("/blog/create", blog.create);
//pages route
app.get("/pages", pages.home);
app.get("/pages/list", pages.list);
//tags route
app.get("/tags", tags.home);
app.get("/tags/search", tags.search);
// http.createServer(app).listen(3000);
app.listen(3000);
