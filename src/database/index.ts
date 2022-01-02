import { PrismaClient } from "@prisma/client";

export class Database {
  public connection: PrismaClient;
  constructor() {
    this.connection = new PrismaClient();
  }
}

export default new Database().connection;
