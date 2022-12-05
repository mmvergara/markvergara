import type { Request as req, Response as res, NextFunction as next } from "express";
import { messageValidationSchema, secretKeyValidationSchema } from "./models/reqBodySchemas";
import { newError } from "./utilities/errorHandling";
import { SECRET_KEY } from "./config";
import messageModel, { messageInfo } from "./models/messageModel";
import sendDiscordMessage from "./utilities/sendDiscordMessage";
import dotenv from "dotenv";
dotenv.config();

export const helloWorld = async (req: req, res: res, next: next) => {
  res.status(200).send("Hello World!");
};

export const sendMessage = async (req: req, res: res, next: next) => {
  const result = messageValidationSchema.validate(req.body);
  const value = result.value as messageInfo;
  try {
    const discordWebHookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebHookUrl) {
      sendDiscordMessage(value, discordWebHookUrl);
    }
    if (result.error) throw newError("Bad Request", 400);
    const newMessage = new messageModel(value);
    await newMessage.save();
    res.status(201).send({ message: "success!", ok: true });
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req: req, res: res, next: next) => {
  const { error, value } = secretKeyValidationSchema.validate(req.body);
  try {
    if (error) throw newError("Bad Request", 400);
    if (value.secretKey !== SECRET_KEY) throw newError("Unauthorized", 401);
    const allMessages = await messageModel.find();
    res.status(200).send({ allMessages, ok: true });
  } catch (error) {
    next(error);
  }
};

export const deleteAll = async (req: req, res: res, next: next) => {
  try {
    await messageModel.deleteMany({});
    console.log("deleting");
    res.status(200).send({ message: "Deleted all documents", ok: true });
  } catch (error) {
    next(error);
  }
};

export const deleteById = async (req: req, res: res, next: next) => {
  const messageId = req.params.messageId;
  try {
    await messageModel.deleteOne({ _id: messageId });
    res.status(200).send({ message: "Document deleted", ok: true });
  } catch (error) {
    next(error);
  }
};
