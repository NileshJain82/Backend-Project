import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// If wanna use the middlewares or configuration then use app.use else use get or post

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

// express configs
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

export default app;
