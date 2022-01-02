import { Router } from "express";
import DeliveryController from "../controllers/DeliveryController";
import authetication from "../middlewares/auth";

const router = Router();

router.get("/", authetication.auth, DeliveryController.index);
router.post("/", DeliveryController.store);
router.post("/sessions", DeliveryController.session);
export default router;
