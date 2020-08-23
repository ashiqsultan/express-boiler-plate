require('dotenv').config();
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const apiVersion1 = require('./api/v1');
const apiVersion2 = require('./api/v2');
const cors = require('cors');
const dbConnect = require('./util/dbConnect');

const app = express();

// Start the server
app.listen(config.port, function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }
  console.log('Server listening on address', this.address());
});

// Initiate morgan logger
// Middleware Morgan to log all request
app.use(morgan(config.morganLogType));

// Middleware for express to parse request body
app.use(express.json({ extended: false }));

// Enable CORS
app.use(cors(config.corsOptions));

// Connect to MongoDB
dbConnect(config.dbConnectionString);

app.use('/v1', apiVersion1);

// 404 Handler
app.use(function (req, res, next) {
  const status = 404;
  const message = 'Resource not found 404';
  console.log(message);
  res.status(status).json({ error: { message } });
});

// Server Error Handler
// Calling next(error) in any of the routes will call this function
app.use((error, req, res, next) => {
  const status = 500;
  const message = 'API Server Error';
  console.error(message);
  console.error(error);
  res.status(status).json({ error: { message } });
});
