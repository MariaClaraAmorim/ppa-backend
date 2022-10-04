import { NextFunction, Request, Response } from "express";
import { validateToken } from "../services/auth";
import { ApiError } from "./error";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Extrai o token do cookie
    const token: string = req.cookies.token;
    console.log("token", token);

    if (!token) throw new ApiError(401, "Token inválido");

    const decoded = await validateToken(token);

    // Reatribui o payload ao request para acessar nas rotas
    req.payload = decoded;

    next();
  } catch (unknownError) {
    const error = unknownError as Error;

    if (error.name === "TokenExpiredError") {
      throw new ApiError(401, "Token inválido");
    }

    throw new ApiError(401, "Token inválido");
  }
}
