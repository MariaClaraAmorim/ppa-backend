import "express-async-errors";

import { Router } from "express";

import authController from "./controllers/auth-controller";

import serverController from "./controllers/server-controller";
import productController from "./controllers/product-controller";
import { authMiddleware } from "./middlewares/jwt";

const router = Router();

router.get("/", serverController.getServerStatus);

// Autenticação
router.post("/auth/sign-in", authController.signIn);
router.post("/auth/sign-up", authController.signUp);
router.post("/auth/sign-out", authController.signOut);

// Rotas privadas
router.get("/search", authMiddleware ,productController.search);

export { router };
