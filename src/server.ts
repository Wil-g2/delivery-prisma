import express, { Express, NextFunction, Request, Response } from "express";
import routes from "./routes";
import "express-async-errors";

class Application {
  public readonly server: Express;

  constructor() {
    this.server = express();
    this.init();
  }

  private init() {
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(express.json());
  }

  private routes() {
    this.server.get("/health", (req, res) => {
      return res.json({
        status: "available",
      });
    });
    this.server.use(routes);
    this.server.use(
      (err: Error, request: Request, response: Response, _: NextFunction) => {
        if (err instanceof Error) {
          return response.status(400).json({
            message: err.message,
          });
        }

        return response.status(500).json({
          status: "error",
          message: "Internal server Error",
        });
      }
    );
  }
}

export default new Application().server;
