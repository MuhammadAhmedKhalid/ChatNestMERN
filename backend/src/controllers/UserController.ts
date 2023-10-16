import { Request, Response } from "express";
import { User } from "../models/User.ts";
import * as bcrypt from 'bcrypt';

export const createUser = async (req: Request, res: Response) => {
    try {
        const {username, password } = req.body;
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({error: 'Username already exists.'});
        }

        const saltRounds = 10;
        bcrypt.hash(password, saltRounds,async (err, hashedPassword) => {
            if(err){
                return res.status(500).json({error: 'Password hashing error.'});
            }

            const newUser = new User({
                username,
                password: hashedPassword, 
                fullName: req.body.fullName,
                email: req.body.email,
                age: req.body.age,
                gender: req.body.gender,
                country: req.body.country,
            });

            await newUser.save();
            res.status(201).json({ message: 'Account created successfully.' });
        })
    } catch (error) {
        res.status(400).json({error: 'Registeration failed.'});
    }
}

export const loginUser = async (req: Request, res: Response) => {
    
}