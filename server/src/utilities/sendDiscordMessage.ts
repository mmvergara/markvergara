export interface messageInfo {
  fullName: string;
  email: string;
  messageContent: string;
}

const sendDiscordMessage = async (message: messageInfo, discordWebHookUrl: string) => {
  fetch(discordWebHookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Career Messenger Bot",
      content: `[](@everyone)`,
      embeds: [
        {
          title: "New Career Message Received!",
          description: `Full Name: ${message.fullName}
                        Email: ${message.email}\n \n
                        Message: ${message.messageContent} \n
                        ${new Date().toLocaleDateString()}`,
        },
      ],
    }),
  });
};

export default sendDiscordMessage;
