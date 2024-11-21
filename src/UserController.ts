import { Request, Response, NextFunction } from "express";

export class UsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, email, password } = req.body;

      // Validação simples
      if (!name || !email || !password) {
        res.status(400).json({ error: "Todos os campos são obrigatórios." });
        return;
      }

      // Simulação da lógica de criação de usuário (troque pela lógica real)
      const newUser = { name, email, password };

      // Retorne a resposta sem retornar a Promise diretamente
      res.status(201).json(newUser);
    } catch (error) {
      // Propague erros para o próximo middleware de erro
      next(error);
    }
  }
}
