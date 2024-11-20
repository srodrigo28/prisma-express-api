import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

export class UsuarioController{
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body
        const user1 = await prismaClient.user.create({
            data: { name, email, password }
        })
        return res.json(user1)
    }
}