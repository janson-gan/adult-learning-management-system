import express, { Application } from "express";
import cors from "cors";
import health from "./routes/routes";
import httpLogger from "./middlewares/http.logger";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(httpLogger);

// Routes
app.use("/api/v1", health);

export default app;
