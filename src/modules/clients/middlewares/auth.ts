import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../../../database";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

class ClientAuth {
  public async auth(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ message: "Token is missing" });
    }

    const [, token] = authorization.split(" ");
    try {
      const tokenDecoded = verify(token, "teste");
      const { sub } = tokenDecoded as TokenPayload;

      const userCheck = await prisma.clients.findFirst({ where: { id: sub } });

      if (!userCheck) {
        return response.status(401).json({ message: "Invalid Token" });
      }

      request.client = {
        id: sub,
      };

      return next();
    } catch {
      return response.status(401).json({ message: "Invalid Token" });
    }
  }
}

export default new ClientAuth();
