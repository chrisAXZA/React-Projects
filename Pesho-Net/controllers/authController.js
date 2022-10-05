import UserModel from "../models/userModel.js";

// Contains logic for register, login, logout

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

};

export const logoutUser = async (req, res) => {

};