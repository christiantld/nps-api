import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import createConnection from "./database/index";
import cors from "cors";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

createConnection();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  return res.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`
  });
});

export default app;
