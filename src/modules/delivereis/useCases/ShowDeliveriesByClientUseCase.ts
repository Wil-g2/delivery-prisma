import prisma from "../../../database";

class ShowDeliveriesByClientUseCase {
  public async execute(id_client: string) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_client,
      },
    });

    return deliveries;
  }
}

export default new ShowDeliveriesByClientUseCase();
