import { MONGODB_URI } from "config";
import mongoose from "mongoose";

//@ts-ignore
let cached: any = global.mongoose;

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function mongoConnect() {
  if (cached.conn) cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.log(e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default mongoConnect;
