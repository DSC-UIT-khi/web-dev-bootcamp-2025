const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected sucessfully!");
  } catch (err) {
    console.log("error in mongodb connection");
  }
};

module.exports = mongoConnection;
