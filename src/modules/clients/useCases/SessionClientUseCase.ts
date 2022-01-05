import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "../../../database";
import { ICreateClientDTO } from "../dto/ICreateClientDTO";

class SessionClient {
  public async execute({ username, password }: ICreateClientDTO) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!clientExist) {
      throw new Error("username or password incorrect");
    }

    const passwordCheck = await compare(password, clientExist.password);
    if (!passwordCheck) {
      throw new Error("username or password incorrect");
    }

    const token = sign({ id: clientExist.id }, "teste", {
      subject: clientExist.id,
      expiresIn: "1d",
    });

    return { token };
  }
}

export default new SessionClient();
