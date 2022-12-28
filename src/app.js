import express from "express";
import logger from "morgan";
import cors from "cors";
import serverless from "serverless-http";

import weatherRouter from "./routers/api/weather.js";

import netlifyRouter from "./routers/api/netlify.js";

//запуск Express
const app = express();

//для Home Page
app.get("/", (_req, res) => res.send("Hello World"));

// Midleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

// for netlify
app.use("/.netlify/frontmentor/api", netlifyRouter);

//oбробка Router
app.use("/weather", weatherRouter);


// для будь-яких інших путів
app.use((_req, res) => res.status(404).send({ msg: "Not Found" }));
// для обработки помилки
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).send({ msg: err.message });
});

export async function handler() {
  serverless(app);
}

export default app;
