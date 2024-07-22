import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

// check for cached
let cached = global.mongoose || { conn: null, promise: null };

export const dbConnect = async () => {
  if (cached.conn) return cached;

  if (!MONGODB_URL) throw new Error("MongoDB URL is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "event-management",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
