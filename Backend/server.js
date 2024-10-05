import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/Message.route.js";
import userRoutes from "./routes/User.route.js";

import connectToDb from "./db/connectToDb.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToDb();
  console.log(`server running at port ${PORT}`);
});
