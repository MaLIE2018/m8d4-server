import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  socketId: { type: String, required: true },
});

export default model("user", userSchema);
