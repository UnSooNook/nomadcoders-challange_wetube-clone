import express from "express";
// Routers
import globalRouter from "./routers/globalRouter";
import courseRouter from "./routers/courseRouter";
import apiRouter from "./routers/apiRouter/apiGlobalRouter";

const app = express();

app.use("/", globalRouter);
app.use("/courses", courseRouter);
app.use("/api", apiRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
