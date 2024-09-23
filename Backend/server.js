import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
import authRoutes from "./routes/auth.route.js";
import connectToDb from "./db/connectToDb.js";

app.get("/", (req, res) => {
  res.send("hello world 1111");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToDb();
  console.log(`server running at port ${PORT}`);
});
