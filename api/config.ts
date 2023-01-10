if (!process.env.CLIENT_APPLICATION_ID) throw new Error("APPLICATION_ID ENV is not defined");
if (!process.env.BOT_TOKEN) throw new Error("BOT_TOKEN ENV is not defined");
if (!process.env.PUBLIC_KEY) throw new Error("PUBLIC_KEY ENV is not defined");
if (!process.env.MMVKEY) throw new Error("MMVKEY ENV is not defined");
if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI ENV is not defined");

export const CLIENT_APPLICATION_ID = process.env.CLIENT_APPLICATION_ID;
export const BOT_TOKEN = process.env.BOT_TOKEN;
export const PUBLIC_KEY = process.env.PUBLIC_KEY;
export const MMVKEY = process.env.MMVKEY;

export const MONGODB_URI = process.env.MONGODB_URI;
export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
