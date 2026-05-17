import Router from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createItems, deleteItem, editItems, updateStatus } from "../controllers/item.controllers.js";

const router = Router();

router.post('/',authMiddleware,createItems);
router.put('/:id',authMiddleware,editItems);
router.patch('/:id/status',authMiddleware,updateStatus);
router.delete('/:id',authMiddleware,deleteItem)

export default router;