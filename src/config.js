const development = {
  dbConnectionString: process.env.DB_CONNECTION_STRING,
  port: process.env.PORT || 8000,
  secretKey: process.env.SECRET_KEY,
  corsOptions: { origin: '*' },
  jwtKeyHeader: 'x-auth-token',
  morganLogType: 'dev',
};
const production = {
  dbConnectionString: process.env.DB_CONNECTION_STRING,
  port: process.env.PORT || 8000,
  secretKey: process.env.SECRET_KEY,
  corsOptions: { origin: ['https://example.com'] },
  jwtKeyHeader: 'x-auth-token',
  morganLogType: 'common',
};

if (process.env.NODE_ENV === 'production') {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  console.log('Loaded Production Config');
  module.exports = production;
} else {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  console.log('Loaded Development Config');
  module.exports = development;
}
