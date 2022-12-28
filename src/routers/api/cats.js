import express from "express";
const catsRouter = express.Router();

import Cats from "../../model/cats.js";
import {
  createValidation,
  updateValidation,
  udateVacinatedValidation
} from "./validation.js";

catsRouter.get("/", async (req, res, next) => {
  try {
    const allCats = await Cats.getAll();

    res.json({
      status: "sucsses",
      code: 200,
      data: { allCats }
    });
  } catch (error) {
    next(error);
  }
});

catsRouter.get("/:id", async (req, res, next) => {
  try {
    const cat = await Cats.getById(req.params.id);

    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
});

catsRouter.post("/", createValidation, async (req, res, next) => {
  try {
    const cat = await Cats.create(req.body);

    res.status(201).json({
      status: "sucsses",
      code: 201,
      data: { cat }
    });
  } catch (error) {
    next(error);
  }
});

catsRouter.put("/:id", updateValidation, async (req, res, next) => {
  try {
    const cat = await Cats.update(req.params.id, req.body);

    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
});

catsRouter.patch(
  "/:id/vacinated",
  udateVacinatedValidation,
  async (req, res, next) => {
    try {
      const cat = await Cats.update(req.params.id, req.body);
      if (cat) {
        res.json({
          status: "sucsses",
          code: 200,
          data: { cat }
        });
      } else {
        res.status(404).json({
          status: "error",
          code: 404,
          data: "Not Found"
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

catsRouter.delete("/:id", async (req, res, next) => {
  try {
    const cat = await Cats.remove(req.params.id);

    if (cat) {
      res.json({
        status: "sucsses",
        code: 200,
        data: { cat }
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not Found"
      });
    }
  } catch (error) {
    next(error);
  }
});
export default catsRouter;
