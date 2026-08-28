import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { getUser, loginHandler, registerHandler } from "../controllers/user.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const router = Router();

router.post('/register',registerHandler)
router.post('/login',loginHandler)
router.get('/me',authMiddleware,getUser)


export default router