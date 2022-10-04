import { Request, Response } from "express";
import { ApiError } from "../middlewares/error";
import { createToken } from "../services/auth";

class Auth {
  async signIn(req: Request, res: Response) {
    const { username, password } = req.body;
    
    console.log(username, password);

    if (!(username === "Maria" && password === "maria123")) {
      throw new ApiError(401, "Usuário inválido");
    }

    const jwt = createToken({ name: "Maria" });

    res.cookie("token", jwt, { maxAge: 900000, httpOnly: true });
    res.send({ message: "Entrou com sucesso" });
  }

  async signUp(req: Request, res: Response) {}

  async signOut(req: Request, res: Response) {
    res.cookie("token", "", { maxAge: 1, httpOnly: true });
    res.send({ message: "Saiu com sucesso" });
  }
}

export default new Auth();
