import express from "express";
const weatherRouter = express.Router();
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

weatherRouter.get("/", async (req, res, next) => {
  const { city } = req.query;

  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: apiKey
        }
      }
    );
    const { weather, wind, name } = response.data;

    res.json({ weather, wind, name });
  } catch (error) {
    next(error);
  }
});

export default weatherRouter;
