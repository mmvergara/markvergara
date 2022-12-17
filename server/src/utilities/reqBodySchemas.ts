import joi from "joi";

export const messageValidationSchema = joi.object({
  fullName: joi.string().alphanum().min(1).max(200).required(),
  email: joi.string().email().max(200).required(),
  messageContent: joi.string().alphanum().min(1).max(30000).required(),
});

export const secretKeyValidationSchema = joi.object({
  secretKey: joi.string().required(),
});
