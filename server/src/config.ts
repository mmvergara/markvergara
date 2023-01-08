import dotenv from "dotenv";
dotenv.config();

if (!process.env.MAILER_EMAIL)  throw new Error("MAILER_EMAIL ENV is not defined")
if (!process.env.MAILER_PASSWORD) throw new Error("MAILER_PASSWORD ENV is not defiend")

export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
export const MAILER_EMAIL = process.env.MAILER_EMAIL;
export const MAILER_PASSWORD = process.env.MAILER_PASSWORD;
