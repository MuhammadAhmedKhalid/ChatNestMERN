import { Request, Response } from "express";
import { User } from "../models/User.ts";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: 'Registeration failed.'});
    }
}

export const loginUser = async (req: Request, res: Response) => {
    
}