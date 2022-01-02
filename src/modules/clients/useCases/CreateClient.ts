import { hash } from "bcrypt";
import prisma from "../../../database";

import { ICreateClientDTO } from "../dto/ICreateClientDTO";

class CreateClient {
  public async execute({ username, password }: ICreateClientDTO) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    if (clientExist) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 10);

    return await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });
  }
}

export default new CreateClient();
