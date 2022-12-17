import nodemailer from "nodemailer";
import { messageInfo } from "./sendDiscordMessage";

export const mailer = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "crownie2003@outlook.com",
    pass: "crowniemailer1919",
  },
});
export const makeMail = (messageInfo: messageInfo) => {
  return {
    from: "crownie2003@outlook.com",
    to: "mark.jesusmanabat@gmail.com",
    subject: "CAREEER MESSAGE!!!! ( PERSONAL WEBSITE MESSAGE )",
    text: `Email: ${messageInfo.email}\n
          Full Name: ${messageInfo.fullName}\n
          ${messageInfo.message} `,
  };
};
