import type { NextApiRequest, NextApiResponse } from "next";
import { CLIENT_APPLICATION_ID, MMVKEY } from "config";
import { discord_api } from "services/discord-api";
import getCommands from "utils/getCommands";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query?.MMVKEY !== MMVKEY) throw new Error();
    const allCommands = await getCommands();
    const arrOfSlashCommandsRegister = Object.values(allCommands);
    const arrOfSlashCommandsRegisterJSON = arrOfSlashCommandsRegister.map((command) => command.register.toJSON());
    await discord_api.put(`/applications/${CLIENT_APPLICATION_ID}/commands`, arrOfSlashCommandsRegisterJSON);

    res.status(200).json({
      error: null,
      inviteLink: `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_APPLICATION_ID}&permissions=277025445888&scope=bot%20applications.commands`,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Error Occured or wrong MMVKEY", sadas: error });
  }
}
