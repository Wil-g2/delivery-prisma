import { Router } from "express";
import DeliveryController from "../controllers/DeliveryController";
import ensureAuthenticate from "../../clients/middlewares/auth";
import ensureAuthenticateDeliveryman from "../../deliverymen/middlewares/auth";
const routes = Router();

routes.post("/", ensureAuthenticate.auth, DeliveryController.store);
routes.get("/", ensureAuthenticate.auth, DeliveryController.show);
routes.get("/client", ensureAuthenticate.auth, DeliveryController.showByClient);
routes.get(
  "/delivyman",
  ensureAuthenticateDeliveryman.auth,
  DeliveryController.showByDeliveryman
);
routes.patch(
  "/:id",
  ensureAuthenticateDeliveryman.auth,
  DeliveryController.update
);

routes.patch(
  "/delivereidat/:id",
  ensureAuthenticateDeliveryman.auth,
  DeliveryController.updateDeliveriedAt
);

export default routes;
