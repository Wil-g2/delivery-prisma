import { Request, Response } from "express";
import CreateDelivery from "../useCases/CreateDelivery";
import SessionDelivery from "../useCases/SessionDelivery";
import ShowAllDelivery from "../useCases/ShowAllDelivery";

class DeliveryController {
  public async store(req: Request, res: Response) {
    const { username, password } = req.body;
    const deliveryman = await CreateDelivery.execute({ username, password });
    return res.status(201).json({ deliveryman });
  }

  public async session(request: Request, response: Response) {
    const { username, password } = request.body;

    const session = await SessionDelivery.execute({ username, password });
    return response.json(session);
  }

  public async index(request: Request, response: Response) {
    const deliverymen = await ShowAllDelivery.execute();
    return response.json(deliverymen);
  }
}

export default new DeliveryController();
