// This file is for mongoDB connection
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected!");
  } catch (err) {
    console.error(err.message);
    // Exit Process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;
