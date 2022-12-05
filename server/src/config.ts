import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGODB_URI) throw new Error("No MongoDB URI found");
if (!process.env.SECRET_KEY) throw new Error("No Secret Key found");

export const MONGODB_URI = process.env.MONGODB_URI;
export const SECRET_KEY = process.env.SECRET_KEY;
