import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError';
import { HTTP_STATUS } from '../config/constants';
import logger from '../utils/logger';

// Validate authorize user for protected route
const authorize = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new ApiError({
        statusCode: HTTP_STATUS.UNAUTHORISED,
        message: 'Access denied. Not authenticated.',
      });
    }
    // Check whether request user role is in the allowed role
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      logger.warn(
        `Unauthorized access attempt by ${req.user.email} with role of ${req.user.role} on route requiring ${allowedRoles.join(', ')}`,
      );
      throw new ApiError({
        statusCode: HTTP_STATUS.FORBIDDEN,
        message: 'Access denied.',
      });
    }
    next();
  };
};

export default authorize;
