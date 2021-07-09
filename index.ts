import mongoose from "mongoose";
import app from "./app";
const PORT = process.env.PORT || 3001;

process.env.TS_NODE_DEV && require("dotenv").config();

if (!process.env.MONGO_CONNECT) throw new Error("MONGO_CONNECTION must be set");

mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Port" + PORT + " server started");
    });
  });
