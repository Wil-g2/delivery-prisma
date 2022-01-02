import prisma from "../../../database";

class ShowAllClient {
  public async execute() {
    return prisma.clients.findFirst();
  }
}

export default new ShowAllClient();
