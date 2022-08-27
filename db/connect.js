const mongoose = require("mongoose");

// const connectionString = `mongodb+srv://brahim:brahimtayer@cluster0.kzskgcq.mongodb.net/?retryWrites=true&w=majority`;
const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
