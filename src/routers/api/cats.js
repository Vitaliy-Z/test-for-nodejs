import express from "express";
const catsRouter = express.Router();

import controller from "../../controllers/controller.js";
import {
  createValidation,
  updateValidation,
  udateVacinatedValidation
} from "./validation.js";

catsRouter
  .get("/", controller.get)
  .post("/", createValidation, controller.create);

catsRouter
  .get("/:id", controller.getById)
  .put("/:id", updateValidation, controller.update)
  .delete("/:id", controller.remove);

catsRouter.patch(
  "/:id/vacinated",
  udateVacinatedValidation,
  controller.updateStatus
);

export default catsRouter;
