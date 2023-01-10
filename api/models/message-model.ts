import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

type messageModel = mongoose.Model<
  {
    createdAt: NativeDate;
    updatedAt: NativeDate;
  } & {
    fullName: string;
    email: string;
    message: string;
  },
  {},
  {},
  {},
  mongoose.Schema<
    any,
    mongoose.Model<any, any, any, any, any>,
    {},
    {},
    {},
    {},
    mongoose.ResolveSchemaOptions<{
      timestamps: true;
    }>,
    {
      createdAt: NativeDate;
      updatedAt: NativeDate;
    } & {
      fullName: string;
      email: string;
      message: string;
    }
  >
>;

export default (mongoose.models["message"] as messageModel) || mongoose.model("message", messageSchema);
