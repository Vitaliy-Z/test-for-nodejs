import express from "express";
const netlifyRouter = express.Router();

netlifyRouter.get("/", (_req, res) => res.send("Hello World"));

export default netlifyRouter;
