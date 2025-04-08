// import { hash, compare } from "bcrypt";
// import jwt from "jsonwebtoken";
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const register = async (req: Request, res: Response): Promise<void> =>{
    const {username, password, email} = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
              username,
              password: hashedPassword,
              email
            },
          });
    } catch (err) {
        res.status(400).json({ message: 'ERROR', cause: err.message });
        
    }
}