import { Router } from "express";

import clientRoute from "./modules/clients/routes";

const routes = Router();

routes.use("/clients", clientRoute);
export default routes;
