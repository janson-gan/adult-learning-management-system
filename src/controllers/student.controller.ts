import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';
import { Student } from '../models';
import ApiError from '../errors/ApiError';
import { createStudentSchema } from '../validations/validation';
import { fromZodError } from 'zod-validation-error';

// Create new student
export const createStudent = asyncHandler(
  async (req: Request, res: Response) => {
    const reqBody = createStudentSchema.safeParse(req.body);
    if (reqBody.success) {
      const newStudent = await Student.create(reqBody.data);
      res.status(201).json({ success: true, data: newStudent });
    } else {
      throw new ApiError({
        statusCode: 400,
        message: fromZodError(reqBody.error).message,
      });
    }
  },
);
