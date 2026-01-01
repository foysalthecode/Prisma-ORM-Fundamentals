import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
