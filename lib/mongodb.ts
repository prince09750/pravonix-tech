import mongoose from "mongoose";

// 1. Global declaration for better type safety in development
// Next.js hot reload causes issues, so we use the global object.
declare global {
  var mongoose: { 
    conn: mongoose.Connection | null; 
    promise: Promise<mongoose.Connection> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please add MONGODB_URI to .env.local");
}

// Initialize global cache in a type-safe way
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

// --- Main Connection Function ---
export const connectDB = async () => {
  // If connection is already cached, return it
  if (global.mongoose.conn) {
    console.log("☑️ Using existing MongoDB connection");
    return global.mongoose.conn;
  }

  // If a connection promise is pending, wait for it
  if (global.mongoose.promise) {
    return global.mongoose.promise;
  }

  // If no connection exists, create a new connection promise
  const opts = {
    bufferCommands: false, // Recommended for serverless environments
  };

  global.mongoose.promise = mongoose
    .connect(MONGODB_URI, opts)
    .then((mongooseInstance) => {
      console.log("✅ New MongoDB connection established");
      return mongooseInstance.connection;
    })
    .catch((error) => {
      // Clear the promise if connection fails
      global.mongoose.promise = null;
      console.error("❌ MongoDB Connection Error:", error);
      throw error; // Re-throw the error to be handled by the caller (API route)
    });
  
  // Cache the final connection object
  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
};
