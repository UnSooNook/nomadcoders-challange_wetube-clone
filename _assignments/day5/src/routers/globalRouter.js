import express from "express";
import {
  home,
  join,
  login,
  confirmAccount
} from "../controllers/homeController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/confirm-account", confirmAccount);

export default globalRouter;
