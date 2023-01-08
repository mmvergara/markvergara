import type { Request as req, Response as res, NextFunction as next } from "express";
import sendDiscordMessage, { messageInfo } from "./utilities/send-discord-message";
import { ErrorHandling, newError } from "./utilities/error-handling";
import { messageValidationSchema } from "./utilities/req-body-schema";
import { DISCORD_WEBHOOK_URL } from "./config";
import { mailer, makeMail } from "./utilities/mailer";
import { limiter } from "./utilities/api-limiter";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import helmet from "helmet";

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
  const discordWebHookUrl = DISCORD_WEBHOOK_URL;
  const result = messageValidationSchema.validate(req.body);
  const value = result.value as messageInfo;

  try {
    console.log(result.error);
    if (result.error) throw newError("Bad Request", 400);
    if (discordWebHookUrl) await sendDiscordMessage(value, discordWebHookUrl);
  } catch (error) {
    next(error);
    return;
  }

  mailer.sendMail(makeMail(value), (err) => {
    if (err) {
      console.log(err);
      res.status(400).send({ message: "Could not send the message", ok: false });
      return;
    }
    console.log(value);
    res.status(200).send({ message: "success!", ok: true });
  });
});

app.use(ErrorHandling);
app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
