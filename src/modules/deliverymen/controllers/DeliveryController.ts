import { Request, Response } from "express";
import CreateDeliveryUseCase from "../useCases/CreateDeliveryUseCase";
import SessionDeliveryUseCase from "../useCases/SessionDeliveryUseCase";
import ShowAllDeliveryUseCase from "../useCases/ShowAllDeliveryUseCase";

class DeliveryController {
  public async store(req: Request, res: Response) {
    const { username, password } = req.body;
    const deliveryman = await CreateDeliveryUseCase.execute({
      username,
      password,
    });
    return res.status(201).json({ deliveryman });
  }

  public async session(request: Request, response: Response) {
    const { username, password } = request.body;

    const session = await SessionDeliveryUseCase.execute({
      username,
      password,
    });
    return response.json(session);
  }

  public async index(request: Request, response: Response) {
    const deliverymen = await ShowAllDeliveryUseCase.execute();
    return response.json(deliverymen);
  }
}

export default new DeliveryController();
