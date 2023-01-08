import joi from "joi";

export const messageValidationSchema = joi.object({
  fullName: joi.string().alphanum().min(1).max(200).required(),
  email: joi.string().email().max(200).required(),
  message: joi.string().alphanum().min(1).max(30000).required(),
});

export type messageBody = {
  fullName: string;
  email: string;
  message: string;
};
