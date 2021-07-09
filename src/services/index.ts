import ChatRouter from "./chat";
import UserRouter from "./user";
import express from "express";

const routes = express.Router();

routes.use("/chat", ChatRouter);
routes.use("/user", UserRouter);

export default routes;
