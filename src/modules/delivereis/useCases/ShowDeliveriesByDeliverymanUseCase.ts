import prisma from "../../../database";

class ShowDeliveriesByDeliverymanUseCase {
  public async execute(id_delivery: string) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_delivery,
      },
    });

    return deliveries;
  }
}

export default new ShowDeliveriesByDeliverymanUseCase();
