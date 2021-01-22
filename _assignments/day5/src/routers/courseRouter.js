import express from "express";
import {
  courses,
  coursesNew,
  coursesMine
} from "../controllers/coursesController";

const courseRouter = express.Router();

courseRouter.get("/", courses);
courseRouter.get("/new", coursesNew);
courseRouter.get("/mine", coursesMine);

export default courseRouter;
