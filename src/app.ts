import express from "express";
import "reflect-metadata";
import createConnection from "./database/index";
import cors from "cors";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export default app;
