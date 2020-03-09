const express = require('express');
const morgan = require('morgan');
const apiVersion1 = require('./api/v1/index');
const apiVersion2 = require('./api/v2/index');
const app = express();

//Creating Roles
require('./Roles/UserRoles');

app.use(morgan('dev')); // Middleware Morgan to log all request
app.use(express.json({ extended: false })); // Middleware to parse request body

// API Version 1 as Middleware
app.use('/v1', apiVersion1);
app.use('/v2', apiVersion2);

// 404 Handler
app.use(function(req, res, next) {
	const message = 'Resource not found for this path';
	res.status(404).json({ message });
});

// 500 Server Error handler
// Calling next(error) in any of the routes will call this function
app.use(function(error, req, res, next) {
	const message = 'API Server Error'; // Message to be sent as response
	console.error(message);
	console.error(error); // Log Error on the server for debugging
	res.status(500).json({ message });
});
module.exports = app;
