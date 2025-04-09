import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

const CLIENT_URL = "https://chat-app-f.netlify.app";

dotenv.config();
const PORT = process.env.PORT;

app.use(cookieParser());

app.use(
  cors({
    origin: CLIENT_URL, // your exact frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // include OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"], // especially if using JWT
  })
);

// Optional: Manually handle preflight OPTIONS
app.options(
  "*",
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chat App backend is running.");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
  connectDB();
});
