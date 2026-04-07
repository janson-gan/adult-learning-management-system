import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Finally solve the import issue... ");
});

export default app;