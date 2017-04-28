//require our dependencies
const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express ();
const port = 8080;

/**
 * Controllers (route handlers).
 */
const userController = require('./controllers/user');

/**
 * Express configuration.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', userController.homeView);
app.get('/about', userController.aboutView);
app.post('/', userController.getTempToken);

//set static files (css, images, etc) location
app.use (express.static(__dirname + '/public'));

//start the server
app.listen (port, function () {
	// console.log('app started!');
});
