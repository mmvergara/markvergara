import {
  APIApplicationCommandInteraction,
  APIApplicationCommandInteractionData,
  APIInteractionResponse,
} from "discord-api-types/v10";
import { SlashCommandBuilder } from "@discordjs/builders";
import { EmbedFailedResponse } from "utils/error-handling";
import { commandOptions } from "types/discord-types";
import { MMVKEY } from "config";
import mongoConnect from "services/mongodb-connect";
import messageModel from "models/message-model";

export const register = new SlashCommandBuilder()
  .setName("get-messages")
  .setDescription("get's all message from personal website")
  .addStringOption((option) => option.setName("mmv-key").setDescription("Insert MMVKEY to delete").setRequired(true));

export const execute = async (interaction: APIApplicationCommandInteraction): Promise<APIInteractionResponse> => {
  try {
    const data = interaction.data as APIApplicationCommandInteractionData & commandOptions;

    if (!data.options) throw new Error("This command requires a MMV Key");
    if (data.options[0].value !== MMVKEY) throw new Error("Wrong MMV Key");

    await mongoConnect();
    const message = await messageModel.find({});

    let fields: { name: string; value: string }[] = [];
    if (message.length > 0) {
      fields = message.map((m) => {
        return {
          name: `${m.email}\n${m.fullName}`,
          value: `${m.message}`,
        };
      });
    }

    return {
      type: 4,
      data: {
        embeds: [
          {
            title: `All Messages from personal website`,
            description: fields.length === 0 ? "No messages found" : "",
            color: 0x502c80,
            fields,
            url: `https://markvergara.vercel.app/`,
          },
        ],
      },
    };
  } catch (e) {
    return EmbedFailedResponse();
  }
};
