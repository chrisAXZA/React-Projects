import { ObjectId } from "mongoose";

import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    const users  =await UserModel.find().select();

    // pass on the list of users in the response
    res.status(200).json(users);
};