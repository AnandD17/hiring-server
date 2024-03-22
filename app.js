import express from "express";
import dotenv from "dotenv";
import { testDbConnection } from "./config/db.js";
dotenv.config();
const app = express();
import cookieParser from "cookie-parser";

//cookies and filemiddleware
app.use(cookieParser());

// import cors
import cors from "cors";
app.use(cors());

// morgan middlewares
import morgan from "morgan";
app.use(morgan("tiny"));

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import all routes here
import candidateRoutes from "./routes/candidateRoutes.js";

// router middleware
app.use("/api/v1/candidate", candidateRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

testDbConnection()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err);
  });

export default app;
