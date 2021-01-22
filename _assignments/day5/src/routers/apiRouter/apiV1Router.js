import express from "express";
import { apiV1Buy, apiV1Refund } from "../../controllers/apiController";

const apiV1Router = express.Router();

apiV1Router.get("/buy", apiV1Buy);
apiV1Router.get("/refund", apiV1Refund);

export default apiV1Router;
