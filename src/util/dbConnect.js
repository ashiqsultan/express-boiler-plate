const mongoose = require('mongoose');

const dbConnect = async (dbConnectionString) => {
  const connectOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(dbConnectionString, connectOptions);
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('Error, Cannot connect to MongoDB', err.message);
    console.error(err);
    process.exit(1)
  }
};

module.exports = dbConnect;
