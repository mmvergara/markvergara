import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    messageContent: { type: String, required: true },
  },
  { timestamps: true }
);
export interface messageInfo {
  fullName: string;
  email: string;
  messageContent: string;
}

export default mongoose.model("message", messageSchema);
