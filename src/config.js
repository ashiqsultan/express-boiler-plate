require('dotenv').config();

const development = {
  dbConnectionString: process.env.DB_CONNECTION_STRING,
};
const production = {
  //dbConnectionString: process.env.DB_CONNECTION_STRING,
};

if (process.env.NODE_ENV === 'production') {
  module.exports = production;
} else {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  module.exports = development;
}
