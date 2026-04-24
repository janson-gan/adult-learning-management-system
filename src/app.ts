import express, { Application } from 'express';
import cors from 'cors';
import health from './routes/health.route';
import httpLogger from './middlewares/http.logger';
import { errorHandler } from './middlewares/error.middleware';
import notFoundHandler from './middlewares/notFound.middleware';
import helmet from 'helmet';
import rateLimiter from './middlewares/rateLimit.middleware';
import authRoutes from './routes/auth.route';

const app: Application = express();

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
  }),
);
// app.use(rateLimiter);

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(httpLogger);

// Health check routes
app.use('/api/v1', health);

// Auth routes
app.use('/api/v1/auth', authRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
