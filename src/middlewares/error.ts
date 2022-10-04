import { NextFunction, Request, Response } from "express";

export class ApiError {
  public message: string;
  public code: number;

  constructor(code: number, message: string) {
    this.message = message;
    this.code = code;
  }
}

export function errorMiddleware(
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const code = error.code || 500;
  const message = error.message ?? "algo deu errado";

  res.status(code).send({
    status: code,
    message,
  });
}
