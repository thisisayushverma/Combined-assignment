import { Router } from "express";
import { createHousholds, getAllMembers, getHouseholdId, joinHousehold, leaveHousehold } from "../controllers/household.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/',authMiddleware,createHousholds)
router.post('/join',authMiddleware,joinHousehold)
router.get('/me',authMiddleware,getHouseholdId)
router.get('/members',authMiddleware,getAllMembers)
router.post('/leave',authMiddleware,leaveHousehold)



export default router