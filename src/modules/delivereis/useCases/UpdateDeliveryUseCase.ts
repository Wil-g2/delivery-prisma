import prisma from "../../../database";
import { UpdateDeliveryDTO } from "../dto/UpdateDeliveryDTO";

class UpdateDelivery {
  public async execute({ id, id_delivery }: UpdateDeliveryDTO) {
    const deliveryExists = await prisma.deliveries.findFirst({
      where: {
        id,
      },
    });

    if (!deliveryExists) {
      throw new Error("Delivery not exist");
    }

    const deliveryUpdate = await prisma.deliveries.update({
      where: {
        id,
      },
      data: {
        id_delivery,
      },
    });

    return deliveryUpdate;
  }
}

export default new UpdateDelivery();
