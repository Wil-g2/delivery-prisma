import { Request, Response } from "express";
import CreateClient from "../useCases/CreateClient";
import SessionClient from "../useCases/SessionClient";
import ShowAllClient from "../useCases/ShowAllClient";

class ClientController {
  public async store(req: Request, res: Response) {
    const { username, password } = req.body;
    const client = await CreateClient.execute({ username, password });
    return res.status(201).json({ client });
  }

  public async session(request: Request, response: Response) {
    const { username, password } = request.body;

    const session = await SessionClient.execute({ username, password });
    return response.json(session);
  }

  public async index(request: Request, response: Response) {
    const clients = await ShowAllClient.execute();
    return response.json(clients);
  }
}

export default new ClientController();
