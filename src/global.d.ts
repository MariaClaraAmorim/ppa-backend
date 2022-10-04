import { PayloadJWT } from "./types/payload";

// Altera tipagens globais
declare global {
  namespace NodeJS {
    // Tipagem das variáveis de ambiente
    interface ProcessEnv {
      PORT: string;
      JWT_KEY: string;
      JWT_EXPIRATION: string;
    }
  }
  namespace Express {
    interface Request {
      payload: PayloadJWT;
    }
  }
}
