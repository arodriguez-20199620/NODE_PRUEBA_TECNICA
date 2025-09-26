import mongoose from "mongoose";
import { DB_URL } from "./appConfig.js";

export const connectDatabase = async () => {
  try {
    mongoose.connection.on("error", () => {
      console.log("❌ MongoDB | Could not connect to MongoDB");
      mongoose.disconnect();
    });
    mongoose.connection.on("connecting", () => {
      console.log("🔄 MongoDB | Trying to connect");
    });
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB | Connected to MongoDB");
    });
    mongoose.connection.once("open", () => {
      console.log("🟢 MongoDB | Connection to database is open");
    });
    mongoose.connection.on("reconnected", () => {
      console.log("🔁 MongoDB | Reconnected to MongoDB");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB | Disconnected");
    });
    await mongoose.connect(DB_URL, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 50,
    });
  } catch (error) {
    console.log(`❌ Error connecting to the database: ${error.message}`);
    process.exit(1);
  }
};
