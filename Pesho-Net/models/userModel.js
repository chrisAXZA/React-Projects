import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import isEmail from 'validator/lib/isEmail.js';

dotenv.config({ path: './config/.env', });

// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
// const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        picture: {
            type: String,
            default: "./uploads/profil/random-user.png"
        },
        bio: {
            type: String,
            max: 1024,
        },
        followers: {
            type: [String]
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true,
    },
);

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            return user;
        }

        throw Error('Incorrect password or email!');
    }

    throw Error('Incorrect password or email!');
};

const UserModel = mongoose.model("user", userSchema);

export default UserModel;