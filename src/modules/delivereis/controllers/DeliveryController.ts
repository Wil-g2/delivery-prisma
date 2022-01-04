import { Request, Response } from "express";
import CreateDeliveryUseCase from "../useCases/CreateDeliveryUseCase";
import ShowDeliveriesByClientUseCase from "../useCases/ShowDeliveriesByClientUseCase";
import ShowDeliveriesByDeliverymanUseCase from "../useCases/ShowDeliveriesByDeliverymanUseCase";
import ShowDeliveriesUseCase from "../useCases/ShowDeliveriesUseCase";
import UpdateDeliveriedAtUseCase from "../useCases/UpdateDeliveriedAtUseCase";
import UpdateDeliveryUseCase from "../useCases/UpdateDeliveryUseCase";

class DeliveryController {
  public async store(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;

    const develivery = await CreateDeliveryUseCase.execute({
      item_name,
      id_client,
    });

    return response.status(201).json(develivery);
  }

  public async show(request: Request, response: Response) {
    const deliveries = await ShowDeliveriesUseCase.execute();
    return response.json(deliveries);
  }

  public async showByClient(request: Request, response: Response) {
    const { id_client } = request;
    const deliveries = await ShowDeliveriesByClientUseCase.execute(id_client);
    return response.json(deliveries);
  }

  public async showByDeliveryman(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const deliveries = await ShowDeliveriesByDeliverymanUseCase.execute(
      id_deliveryman
    );
    return response.json(deliveries);
  }

  public async update(request: Request, response: Response) {
    const { id_delivery } = request.body;
    const { id } = request.params;
    const delivery = await UpdateDeliveryUseCase.execute({
      id,
      id_delivery,
    });

    return response.json(delivery);
  }

  public async updateDeliveriedAt(request: Request, response: Response) {
    const { deliveried_at, id_delivery } = request.body;
    const { id } = request.params;
    const update = await UpdateDeliveriedAtUseCase.execute({
      id,
      id_delivery,
      deliveried_at,
    });

    return response.json(update);
  }
}

export default new DeliveryController();
