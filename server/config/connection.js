import{connection, connect} from 'mongoose';
import process from 'process';
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {...})
connect(process.env.MONGODB_URI || 'mongodb://localhost/bookle', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//module.exports = mongoose.connection;
export default { connection };
