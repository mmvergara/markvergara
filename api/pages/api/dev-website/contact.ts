import type { NextApiRequest, NextApiResponse } from "next";
import { messageBody, messageValidationSchema } from "models/req-body-schema";
import { DISCORD_WEBHOOK_URL } from "config";
import sendDiscordMessage from "utils/send-discord-message";
import allowedMethod from "utils/error-handling";
import messageModel from "models/message-model";
import mongoConnect from "services/mongodb-connect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!allowedMethod(req, "PUT")) return res.status(401).end("Method not allowed");
  const { error, value } = messageValidationSchema.validate(req.body);
  try {
    await mongoConnect()
    // Validate body
    if (error) throw new Error("Invalid request body");
    const message = value as messageBody;

    // Create and save message
    const newMessage = new messageModel({ ...message });
    await newMessage.save();

    res.status(200).send({ message: "Message sent!" });
    if (DISCORD_WEBHOOK_URL) await sendDiscordMessage(message, DISCORD_WEBHOOK_URL);
  } catch (error) {
    res.status(400).send({ message: "Error Occured" });
  }
}
