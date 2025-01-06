const  mongoose = require("mongoose");

let config = require("../config")
console.log(config.db)
mongoose.connect(config.db).then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });