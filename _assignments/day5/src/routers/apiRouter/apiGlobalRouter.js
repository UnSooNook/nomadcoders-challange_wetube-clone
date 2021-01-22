import express from "express";
import apiV1Router from "./apiV1Router";
import apiV2Router from "./apiV2Router";
import { api, apiDocumentation } from "../../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get("/", api);
apiRouter.get("/documentation", apiDocumentation);

apiRouter.use("/v1", apiV1Router);
apiRouter.use("/v2", apiV2Router);

export default apiRouter;
