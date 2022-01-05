import { Request, Response } from "express";
import CreateClientUseCase from "../useCases/CreateClientUseCase";
import SessionClientUseCase from "../useCases/SessionClientUseCase";
import ShowAllClientUseCase from "../useCases/ShowAllClientUseCase";

class ClientController {
  public async store(req: Request, res: Response) {
    const { username, password } = req.body;
    const client = await CreateClientUseCase.execute({ username, password });
    return res.status(201).json({ client });
  }

  public async session(request: Request, response: Response) {
    const { username, password } = request.body;

    const session = await SessionClientUseCase.execute({ username, password });
    return response.json(session);
  }

  public async index(request: Request, response: Response) {
    const clients = await ShowAllClientUseCase.execute();
    return response.json(clients);
  }
}

export default new ClientController();
