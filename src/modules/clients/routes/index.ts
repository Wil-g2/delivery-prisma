import { Router } from "express";
import ClientController from "../controllers/ClientController";
import authetication from "../middlewares/auth";

const router = Router();

router.get("/", authetication.auth, ClientController.index);
router.post("/", ClientController.store);
router.post("/sessions", ClientController.session);
export default router;
