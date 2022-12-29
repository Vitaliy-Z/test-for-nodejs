import express from "express";
import logger from "morgan";
import cors from "cors";

import catsRouter from "./routers/api/cats.js";

//запуск Express
const app = express();

//для Home Page
app.get("/", (_req, res) => res.send("Hello World"));

// Midleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

//oбробка Router
app.use("/cats", catsRouter);

// для будь-яких інших путів
app.use((_req, res) => res.status(404).send({ msg: "Not Found" }));
// для обработки помилки
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).send({ msg: err.message });
});

export default app;
