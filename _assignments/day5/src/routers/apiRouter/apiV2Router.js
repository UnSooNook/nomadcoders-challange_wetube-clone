import express from "express";
import { apiV2Remove, apiV2Edit } from "../../controllers/apiController";

const apiV2Router = express.Router();

apiV2Router.get("/remove", apiV2Remove);
apiV2Router.get("/edit", apiV2Edit);

export default apiV2Router;
