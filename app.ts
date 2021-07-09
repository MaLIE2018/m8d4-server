import cors from "cors";
import express from "express";
import routes from "./src/services/index";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);
const io = new Server(server, { allowEIO3: true });

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(socket.id);

  console.log(socket.rooms);
});

app.use(cors());
app.use(express.json());
app.use("/", routes);

export default server;
