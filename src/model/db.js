import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const URL_DB = process.env.URL_DB;
const db = MongoClient.connect(URL_DB, { maxPoolSize: 5 });

process.on("SIGINT", async () => {
  db.close();
  console.log("Conection closed and app termination");
  process.exit(1);
});

export default db;
