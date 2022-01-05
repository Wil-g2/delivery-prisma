import prisma from "../../../database";

class ShowAllDelivery {
  public async execute() {
    return prisma.deliverymen.findFirst();
  }
}

export default new ShowAllDelivery();
