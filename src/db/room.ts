import mongoose from "mongoose";

const { model, Schema } = mongoose;

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  text: { type: String, required: true },
});

const roomSchema = new Schema({
  socketId: { type: String, required: true },
  chatHistory: { type: [MessageSchema], required: true, default: [] },
});

export default model("room", roomSchema);
