import { Router } from "express";

import clientRoute from "./modules/clients/routes";
import deliverymenRoute from "./modules/deliverymen/routes";
import deliveryRoute from "./modules/delivereis/routes";

const routes = Router();

routes.use("/clients", clientRoute);
routes.use("/deliverymen", deliverymenRoute);
routes.use("/deliveries", deliveryRoute);

export default routes;
