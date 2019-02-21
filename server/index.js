'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

//api routes forwarded
app.use('/api', require('./api'));

// handles requests with extensions .js, .css, etc
app.use((req, res, next) => {
	if (path.extname(req.path).length) {
		const err = new Error('Not found');
		err.status = 404;
		next(err);
	} else {
		next();
	}
});

// // sends index.html
// app.use('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '..', 'public/index.html'));
// });

// error handling
app.use((err, req, res, next) => {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
