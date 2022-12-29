import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL_DB = process.env.URL_DB;

const db = mongoose.connect(URL_DB, { maxPoolSize: 5 });

mongoose.connection.on("connected", () => console.log("Connected to DB OK..."));
mongoose.connection.on("error", (err) =>
  console.log(`Error connected to DB: ${err.message}`)
);
mongoose.connection.on("disconnected", () =>
  console.log("Disconnected for DB")
);

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Connection for DB closed and app termination");
  process.exit(1);
});

export default db;
