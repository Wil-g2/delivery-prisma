import prisma from "../../../database";
import { UpdateDeliveryDTO } from "../dto/UpdateDeliveryDTO";

class UpdateDeliveriedAtUseCase {
  public async execute({ id, id_delivery, deliveried_at }: UpdateDeliveryDTO) {
    const deliveryExists = await prisma.deliveries.findFirst({
      where: {
        id,
      },
    });

    if (!deliveryExists) {
      throw new Error("Delivery not exist");
    }

    const deliveryUpdate = await prisma.deliveries.updateMany({
      where: {
        AND: {
          id,
          id_delivery,
        },
      },
      data: {
        deliveried_at,
      },
    });

    return deliveryUpdate;
  }
}

export default new UpdateDeliveriedAtUseCase();
