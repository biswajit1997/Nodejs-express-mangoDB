const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connectionString = "XXXXXX";

    const connection = await mongoose.connect(connectionString);

    console.log("Connected to the database",connection.connection.host,connection.connection.name);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
