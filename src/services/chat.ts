import express from "express";
import Schemas from "../db/index";

const ChatRouter = express.Router();

ChatRouter.get("/", async (req, res, next) => {
  console.log("test");
  const rooms = await Schemas.Rooms.find({});
  res.status(200).send(rooms);
});

ChatRouter.post("/", async (req, res, next) => {});

ChatRouter.delete("/:id", async (req, res, next) => {});

export default ChatRouter;
