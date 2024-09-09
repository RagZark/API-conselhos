import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import ConselhoController from "./controller/ConselhoController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const conselhoController = new ConselhoController()

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.get("/conselho", conselhoController.getConselho);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});