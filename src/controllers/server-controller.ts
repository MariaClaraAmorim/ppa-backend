import { Request, Response } from "express";

class Server {
  async getServerStatus(req: Request, res: Response) {
    res.send({
      hello: "world",
    });
  }
}

export default new Server();
