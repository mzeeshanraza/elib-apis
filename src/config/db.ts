import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Erorr in connecting to database.", err);
    });

    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.log("Failed to connect to database.", err);
    process.exit(1);
  }
};

export default connectDB;
