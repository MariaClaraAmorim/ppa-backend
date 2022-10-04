import { PayloadJWT } from "../types/payload";
import jwt from "jsonwebtoken";

// Gerar um token para o usuário
export function createToken(payload: PayloadJWT): string {
  const key = process.env.JWT_KEY ?? "jwt";
  const expiresIn = process.env.JWT_EXPIRATION ?? "3h";

  const token = jwt.sign(payload, key, { expiresIn });

  return token;
}

// Validar que o token é valido e extrair as informações dele
export function validateToken(token: string): Promise<PayloadJWT> {
  const key = process.env.JWT_KEY ?? "jwt";

  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (error, decoded) => {
      console.log(JSON.stringify(error));

      if (error) return reject(error);

      const data = decoded as PayloadJWT;

      resolve(data);
    });
  });
}
