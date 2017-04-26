//require our dependencies
var express = require ('express');
var path = require('path');
var app = express ();
var port = 8080;

//route our app
var router  = require('./app/routes');
app.use ('/', router);

/**
 * Express configuration.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set static files (css, images, etc) location
app.use (express.static(__dirname + '/public'));

//start the server
app.listen (port, function () {
	console.log('app started!');
});
