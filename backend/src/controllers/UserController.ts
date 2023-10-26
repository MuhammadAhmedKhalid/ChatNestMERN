import { Request, Response } from "express";
import { User } from "../models/User.ts";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response) => {
    try {
        const {username, password, fullName, email, age, gender, country } = req.body;
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({error: 'Username already exists.'});
        }

        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
            if(err){
                return res.status(500).json({error: 'Password hashing error.'});
            }

            const newUser = new User({username, password: hashedPassword, fullName, email, age, gender, country});
            await newUser.save();

            res.status(201).json({ message: 'Account created successfully.' });
        })
    } catch (error) {
        res.status(400).json({error: 'Registeration failed.'});
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(404).json({ error: 'User not found.' });
        }

        // using a type assertion to tell TS that 'user' is not null
        const userWithPass = user as { password: string};

        const result = await bcrypt.compare(password, userWithPass.password);

        if(result){
            const SECRET_KEY = process.env.SECRET_KEY;

            if (!SECRET_KEY) {
                console.error('ERROR: SECRET_KEY is not set. Please configure it.');
                return res.status(500).json({ error: 'Internal server error.' });
            }
            
            try {
                const sessionToken = jwt.sign({ username: user.username }, SECRET_KEY);
                res.status(200).json({ message: 'Login successful.', token: sessionToken  });
            } catch (error) {
                res.status(500).json({ error: 'Internal server error.' });
            }

        } else {
            res.status(401).json({ error:'Invalid password.' });
        }
        
    } catch (error) {
        res.status(400).json({ error: 'Login failed.' });
    }
}

export const logoutUser = async (req: Request, res: Response) => {
    
    const token = req.header("Authorization");
    const SECRET_KEY = process.env.SECRET_KEY;

    if (!SECRET_KEY) {
        console.error('ERROR: SECRET_KEY is not set. Please configure it.');
        return res.status(500).json({ error: 'Internal server error.' });
    }
    
    if (!token) {
        return res.status(401).json({ error: "Unauthorized." });
    }

    // Creating a new token with an immediate expiration (1 second)
    jwt.sign({}, SECRET_KEY, { expiresIn: "1s" });

    res.status(200).json({ message: "Logout successful." });

}