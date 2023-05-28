const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connectionString = "mongodb+srv://biswajitpradhan120:" + encodeURIComponent("Pradhan@123") + "@biswajitcluster.uv0ljpz.mongodb.net/mycontacts-backend?retryWrites=true&w=majority";

    const connection = await mongoose.connect(connectionString);

    console.log("Connected to the database",connection.connection.host,connection.connection.name);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
