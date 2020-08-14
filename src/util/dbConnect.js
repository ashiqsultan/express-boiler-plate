const mongoose = require('mongoose');

const dbConnect = async (dbConnectionString) => {
  try {
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error(`Error, Cannot connect to MongoDB \n ${err.message}`);
    console.error(err);
  }
};

module.exports = dbConnect;
