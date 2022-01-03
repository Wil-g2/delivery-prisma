import prisma from "../../../database";

class ShowDeliveriesUseCase {
  public async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        deliveried_at: {
          equals: null,
        },
        id_delivery: {
          equals: null,
        },
      },
    });

    return deliveries;
  }
}

export default new ShowDeliveriesUseCase();
