// require('dotenv').config();

const development = {
  dbConnectionString: process.env.DB_CONNECTION_STRING,
  port: process.env.PORT || 8000,
  morganLogType: 'dev',
};
const production = {
  dbConnectionString: process.env.DB_CONNECTION_STRING,
  port: process.env.PORT || 8000,
  morganLogType: 'common',
};

if (process.env.NODE_ENV === 'production') {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  module.exports = production;
} else {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  module.exports = development;
}
