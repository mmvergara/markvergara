import { messageBody } from "models/req-body-schema";
import axios from "axios";

const sendDiscordMessage = async (message: messageBody, discordWebHookUrl: string) => {
  const res = await axios.post(discordWebHookUrl, {
    username: "Career Messenger Bot",
    content: "New Message Arrived!!! [](@everyone)",
    embeds: [
      {
        title: " New Career Message Received!",
        description: `Full Name: ${message.fullName}
                      Email: ${message.email}\n \n
                      Message: ${message.message} \n
                      ${new Date().toLocaleDateString()}`,
      },
    ],
  });
  return res;
};

export default sendDiscordMessage;
