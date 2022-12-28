import app from "../app.js";
import db from "../model/db.js";

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch((e) => console.log(`Server not running. Error message: ${e.message}`));
