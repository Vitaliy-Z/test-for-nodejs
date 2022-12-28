import express from "express";
const netlifyRouter = express.Router();

netlifyRouter.get("/", (_req, res) => res.json({ netlify: "Hello World" }));

export default netlifyRouter;
