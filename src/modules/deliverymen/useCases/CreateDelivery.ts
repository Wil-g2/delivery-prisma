import { hash } from "bcrypt";
import prisma from "../../../database";
import { CreateDeliveryDTO } from "../dto/CreateDeliveryDTO";

class CreateDelivery {
  public async execute({ username, password }: CreateDeliveryDTO) {
    const deliveryExist = await prisma.deliverymen.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    if (deliveryExist) {
      throw new Error("Delivery already exists");
    }

    const hashPassword = await hash(password, 10);

    return await prisma.deliverymen.create({
      data: {
        username,
        password: hashPassword,
      },
    });
  }
}

export default new CreateDelivery();
