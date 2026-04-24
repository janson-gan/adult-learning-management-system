import { Router } from 'express';
import { getMe, login, register } from '../controllers/auth.controller';
import validate from '../middlewares/validate.middleware';
import { loginSchema, registerSchema } from '../validations/validation';
import authenticate from '../middlewares/auth.middleware';
import authorize from '../middlewares/authorize.middleware';

const router = Router();

// @route  POST /api/v1/auth/register
// @desc   Register a new user
// @access Public
router.route('/register').post(validate(registerSchema), register);

// @route  POST /api/v1/auth/login
// @desc   Login user and return token
// @access Public
router.route('/login').post(validate(loginSchema), login);

// @route  POST /api/v1/auth/me
// @desc   Get current logged in user
// @access Private
router.route('/me').get(authenticate, getMe)

export default router;
