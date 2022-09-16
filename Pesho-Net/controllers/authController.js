import UserModel from "../models/user.model.js";

// Contains logic for register, login, logout

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await UserModel.create({ username, email, password, });
        // sends response that new user has been created
        res.status(201).json({ user: user._id, });
    } catch (error) {
        // sends error in response
        res.status(200).send({ error });
    }
};
