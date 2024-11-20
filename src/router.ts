import { Router } from "express";
import { UsuarioController } from "./UserController";

const router = Router();

const createUsuario = new UsuarioController();
router.post("/user", createUsuario.handle)

export { router }