import { z } from 'zod';

export const createStudentSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.email('Invalid email format').min(1, 'Email is required'),
  phone: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
});
