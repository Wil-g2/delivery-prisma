import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "../../../database";
import { CreateDeliveryDTO } from "../dto/CreateDeliveryDTO";

class SessionDelivery {
  public async execute({ username, password }: CreateDeliveryDTO) {
    const deliveryExist = await prisma.deliverymen.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryExist) {
      throw new Error("username or password incorrect");
    }

    const passwordCheck = await compare(password, deliveryExist.password);
    if (!passwordCheck) {
      throw new Error("username or password incorrect");
    }

    const token = sign({ id: deliveryExist.id }, "teste", {
      subject: deliveryExist.id,
      expiresIn: "1d",
    });

    return { token };
  }
}

export default new SessionDelivery();
