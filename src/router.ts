import { Router } from "express";
import { UsuarioController } from "./UserController";

const router = Router();

const createUsuario = new UsuarioController();
router.post("/user", (req, res, next) => createUsuario.handle(req, res, next));

export { router };