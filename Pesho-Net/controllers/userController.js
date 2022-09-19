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
    validateObjectId(userId, res);

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

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    validateObjectId(userId, res);

    // await UserModel.findByIdAndUpdate(userId, { ...req.body }, { new: true, upsert: true, setDefaultsOnInsert: true, });
    // await UserModel.findByIdAndUpdate(userId, { bio: req.body.bio, }, { new: true, upsert: true, setDefaultsOnInsert: true, });
    try {
        await UserModel
            .findOneAndUpdate(
                { _id: userId },
                {
                    $set: {
                        bio: req.body.bio,
                    },
                },
                { new: true, upsert: true, setDefaultsOnInsert: true, },
                // the query executes if callback is passed
                (err, userData) => {
                    if (!err) {
                        return res.send(userData);
                    } else if (err) {
                        return res.status(500).send({ message: err });
                        // The res.send function sets the content type to text/Html
                        // which means that the client will now treat it as text. 
                        // It then returns the response to the client.
                    }
                },
            )
            .clone()
            .catch((err) => { console.log(err); });
        // Mongoose no longer allows executing the same query object twice. 
        // If you do, you'll get a Query was already executed error. 
        // Executing the same query instance twice is typically indicative 
        // of mixing callbacks and promises, but if you need to execute the same query twice,
        // you can call Query#clone() to clone the query and re-execute it.
        // So all you need to do is to add a .clone() method to the end of the mongoose method 
        // that needs to be called concurrently.
    } catch (error) {
        return res.status(500).json({ message: error });
        
        // console.log(error);
        // The res.json function on the other handsets the content-type header to application/JSON 
        // so that the client treats the response string as a valid JSON object. 
        // It also then returns the response to the client.
    }
};

function validateObjectId(userId, res) {
    const ObjectId = mongoose.Types.ObjectId;

    if (!ObjectId.isValid(userId)) {
        return res.status(400).send(`Invalid user ID! >>> ${userId}`);
    }
}