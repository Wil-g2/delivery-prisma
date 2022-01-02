import { Router } from "express";

import clientRoute from "./modules/clients/routes";
import deliverymenRoute from "./modules/deliverymen/routes";

const routes = Router();

routes.use("/clients", clientRoute);
routes.use("/deliverymen", deliverymenRoute);

export default routes;
