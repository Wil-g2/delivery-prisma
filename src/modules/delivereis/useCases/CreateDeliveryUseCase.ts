import prisma from "../../../database";
import { CreateDeliveryDTO } from "../dto/CreateDeliveryDTO";

class CreateDeliveryUseCase {
  public async execute({ id_client, item_name }: CreateDeliveryDTO) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}

export default new CreateDeliveryUseCase();
