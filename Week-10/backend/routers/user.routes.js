import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import { loginHandler, registerHandler } from "../controllers/user.controllers.js";


const router = Router();

router.post('/register',registerHandler)
router.post('/login',loginHandler)


export default router