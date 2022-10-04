// Carrega variáveis de ambiente
import "dotenv/config";

import "express-async-errors";

import { createServer } from "node:http";

import express from "express";

import cookieParser from "cookie-parser";

import cors from "cors";

import { router } from "./routes";

import { errorMiddleware } from "./middlewares/error";

const PORT = process.env.PORT ?? 3333;

const app = express();

import "express-async-errors";

const server = createServer(app);

// CORS
const acceptedOrigins = process.env.ORIGINS ?? "*";
app.use(
  cors({
    origin: acceptedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// Suporta JSON
app.use(express.json());

// Melhora suporte a cookies
app.use(cookieParser());

// Rotas
app.use("/api/v1", router);

// Erros da API
app.use(errorMiddleware);

server.listen(PORT, () => {
  console.log(`Online em http://localhost:${PORT}/api/v1`);
});
