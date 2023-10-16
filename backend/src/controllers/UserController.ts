import { Request, Response } from "express";
import { User } from "../models/User.ts";

export const createUser = async (req: Request, res: Response) => {
    try {
        const {username} = req.body;
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({error: 'Username already exists.'});
        }
        const user = new User(req.body);
        await user.save();
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).json({error: 'Registeration failed.'});
    }
}

export const loginUser = async (req: Request, res: Response) => {
    
}