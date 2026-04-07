import winston from "winston";

// Create a custom logger to include timestamp
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
  // Print out the log to file
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

export default logger;
