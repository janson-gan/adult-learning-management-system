import { Request, Response, NextFunction } from 'express';
import { AuthHeaders, HTTP_STATUS } from '../config/constants';
import ApiError from '../utils/ApiError';
import jwt from 'jsonwebtoken';
import { JWTPayloadType } from '../types/auth.types';

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayloadType;
    }
  }
}

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // Get the token from request headers authorization
  const authHeader = req.headers.authorization;

  // Check if no token
  if (!authHeader || !authHeader.startsWith(AuthHeaders.BEARER)) {
    throw new ApiError({
      statusCode: HTTP_STATUS.UNAUTHORISED,
      message: 'Access denied. No token provided.',
    });
  }

  // Get the exact token from the bearer
  const token = authHeader.split(' ')[1];

  // Validate the token is valid
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JWTPayloadType;

    // If token valid, attached to request user
    req.user = decoded;
    next();

    // If not valid or expired token throw error
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      throw new ApiError({
        statusCode: HTTP_STATUS.UNAUTHORISED,
        message: 'Token expired.',
      });
    }
    throw new ApiError({
      statusCode: HTTP_STATUS.FORBIDDEN,
      message: 'Invalid token.',
    });
  }
};

export default authenticate;
