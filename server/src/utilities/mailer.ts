import nodemailer from "nodemailer";
import { MAILER_EMAIL, MAILER_PASSWORD } from "../config";
import { messageInfo } from "./send-discord-message";

export const mailer = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PASSWORD,
  },
});
export const makeMail = (messageInfo: messageInfo) => {
  return {
    from: MAILER_EMAIL,
    to: "mark.jesusmanabat@gmail.com",
    subject: "CAREEER MESSAGE!!!! ( PERSONAL WEBSITE MESSAGE )",
    text: `Email: ${messageInfo.email}\n
          Full Name: ${messageInfo.fullName}\n
          ${messageInfo.message} `,
  };
};
