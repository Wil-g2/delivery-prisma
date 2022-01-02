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
      throw new Error("token is missing");
    }

    const [, token] = authorization.split(" ");
    try {
      const tokenDecoded = verify(token, "teste");
      const { sub } = tokenDecoded as TokenPayload;

      const userCheck = await prisma.clients.findFirst({ where: { id: sub } });

      if (!userCheck) {
        throw new Error("invalid Token");
      }

      request.client = {
        id: sub,
      };

      return next();
    } catch {
      throw new Error("invalid Token");
    }
  }
}

export default new ClientAuth();
