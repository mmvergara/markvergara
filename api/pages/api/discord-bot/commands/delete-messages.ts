import {
  APIApplicationCommandInteraction,
  APIApplicationCommandInteractionData,
  APIInteractionResponse,
} from "discord-api-types/v10";
import { SlashCommandBuilder } from "@discordjs/builders";
import { EmbedFailedResponse } from "utils/error-handling";
import { MMVKEY } from "config";
import messageModel from "models/message-model";
import mongoConnect from "services/mongodb-connect";
import { commandOptions } from "types/discord-types";

export const register = new SlashCommandBuilder()
  .setName("delete-messages")
  .setDescription("deletes all messages on personal website")
  .addStringOption((option) => option.setName("mmv-key").setDescription("Insert MMVKEY to delete").setRequired(true));

export const execute = async (interaction: APIApplicationCommandInteraction): Promise<APIInteractionResponse> => {
  try {
    const data = interaction.data as APIApplicationCommandInteractionData & commandOptions;

    if (!data.options) throw new Error("This command requires a MMV Key");
    if (data.options[0].value !== MMVKEY) throw new Error("Wrong MMV Key");

    await mongoConnect();
    await messageModel.deleteMany({});

    return {
      type: 4,
      data: {
        embeds: [
          {
            title: "Successfully all messages 🚩",
            description: "",
            color: 0xd93321,
          },
        ],
      },
    };
  } catch (e) {
    return EmbedFailedResponse();
  }
};
