import mongoose from 'mongoose';

import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    // filter password data from all users
    // const users = await UserModel.find().select(['-password', '-email']);
    const users = await UserModel.find().select('-password');

    // pass on the list of users in the response
    res.status(200).json(users);
};

// userInfo
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    const ObjectId = mongoose.Types.ObjectId;

    if (!ObjectId.isValid(userId)) {
        return res.status(400).send(`Invalid user ID! >>> ${userId}`);
    }

    // const user = UserModel.findById(userId);
    // res.status(200).json(user);
    UserModel
        .findById(userId, (error, userData) => {
            if (!error) {
                res.send(userData);
            } else {
                console.log(`Error fetching user with user ID! ${userId} >>> ${error}`);
            }
        })
        .select('-password');
};