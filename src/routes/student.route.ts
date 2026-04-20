import { Router } from "express";
import { createStudent } from "../controllers/student.controller";


const router = Router()

// Student Route
router.route('/students').post(createStudent)

export default router