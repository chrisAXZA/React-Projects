import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import UserModel from "../models/userModel.js";
import { loginErrors, registerErrors } from '../utils/errorsUtils.js';

dotenv.config({ path: './config/.env', });

const maxAge = 30 * 60 * 1000;
const createToken = (userId) => {
    return jwt.sign(
        { userId }, // payload
        process.env.TOKEN_SECRET, // secret key
        {
            // expiresIn: 1 * 24 * 60 * 60 * 1000, // 1 day valid
            expiresIn: maxAge,
        }, // options/callback
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
        // console.log(err);
        // sends error in response
        // res.status(200).send({ error: err.message, maxAge, });
        const errors = registerErrors(err);

        res.status(200).send({ errors });
        // res.status(200).send({ error: err, message: err.message });
    }
};

export const loginUser2 = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    // const user = await UserModel.findOne({ email, password });
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);

    if (!user) {
        console.log('Error in login!');
    }

    if (!token) {
        console.log('Error generating a new token!');
    }

    res.cookie('jwt', token, { httpOnly: true, maxAge, });
    res.status(200).json({ user: user._id });
};


export const loginUser = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: true, maxAge, });
        res.status(200).json({ user: user._id });
    } catch (error) {
        // res.status(200).json({ error, message: error.message, });
        const errors = loginErrors(error);
        res.status(200).json({ errors });
    }
};

export const logoutUser = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1, });
    res.redirect('/'); // redirect required for Postman
};