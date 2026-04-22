import { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";

// Wait for 3 minutes after 5 tries of api calling
// Adjustable as per requirements
export const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
});

export default rateLimiter;
