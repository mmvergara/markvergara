import axios from "axios";
export interface messageInfo {
  fullName: string;
  email: string;
  message: string;
}

const sendDiscordMessage = async (message: messageInfo, discordWebHookUrl: string) => {
  const res = await axios.post(discordWebHookUrl, {
    username: "Career Messenger Bot",
    content: `[](@everyone)`,
    embeds: [
      {
        title: "New Career Message Received!",
        description: `Full Name: ${message.fullName}
                      Email: ${message.email}\n \n
                      Message: ${message.message} \n
                      ${new Date().toLocaleDateString()}`,
      },
    ],
  });
  console.log(res);
  return res;
};

export default sendDiscordMessage;
