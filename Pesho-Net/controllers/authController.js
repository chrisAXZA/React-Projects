import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import UserModel from "../models/userModel.js";

dotenv.config({ path: './config/.env', });

const createToken = (userId) => {
    return jwt.sign(
        { id }, // payload
        process.env.TOKEN_SECRET, // secret key
        {
            // expiresIn: 1 * 24 * 60 * 60 * 1000, // 1 day valid
            expiresIn: 30 * 60 * 1000,
        } // options/callback
    );
};

// Contains logic for register/createUser, login, logout
export const register = async (req, res) => {
    console.log(req.body);

    const { username, email, password } = req.body;

    try {
        const user = await UserModel.create({ username, email, password, });
        // sends response that new user has been created
        res.status(201).json({ user: user._id, });
    } catch (err) {
        console.log(err);
        // sends error in response
        res.status(200).send({ error: err.message });
    }
};

export const loginUser = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email, password })
        const token = createToken(user._id);

    } catch (error) {
        console.log(error);
    }

};

export const logoutUser = async (req, res) => {

};