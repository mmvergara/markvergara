import type { Request as req, Response as res, NextFunction as next } from "express";
import { ErrorHandling, newError } from "./utilities/errorHandling";
import { messageValidationSchema } from "./utilities/reqBodySchemas";
import { limiter } from "./utilities/apiLimiter";
import sendDiscordMessage, { messageInfo } from "./utilities/sendDiscordMessage";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: req, res: res, next: next) => {
  res.status(200).send("Hello World!");
});

app.put("/sendmessage", limiter, async (req: req, res: res, next: next) => {
  const result = messageValidationSchema.validate(req.body);
  const value = result.value as messageInfo;
  try {
    const discordWebHookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebHookUrl) {
      await sendDiscordMessage(value, discordWebHookUrl);
    }
    if (result.error) throw newError("Bad Request", 400);

    res.status(201).send({ message: "success!", ok: true });
  } catch (error) {
    next(error);
  }
});

app.use(ErrorHandling);
app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
