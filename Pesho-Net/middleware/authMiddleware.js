import jwt from 'jsonwebtoken';

import UserModel from '../models/userModel.js'

// next passed as last argument for middleware
export const checkUserLogStatus = (req, res, next) => {
    // extract cookie from req cookies
    // read cookie data with library cookie-parser
    const token = req.cookies.jwt;

    // console.log('here', token);

    if (token) {
        jwt.verify(
            token,
            process.env.TOKEN_SECRET,
            async (err, decodedToken) => { // response implemented in callback
                if (err) {
                    res.locals.user = null;
                    res.cookie('jwt', '', { maxAge: 1, });
                } else {
                    const user = await UserModel.findById(decodedToken.userId); // decodedToken contains userId
                    res.locals.user = user;
                    // console.log(decodedToken);
                    // console.log(res.locals.user);
                }

                next();
            }
        );
    } else {
        // console.log('here2');
        res.locals.user = null;
        next();
    }
};

// verifies the current user's token with the ones already found in DB
export const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(
            token,
            process.env.TOKEN_SECRET,
            async (err, decodedToken) => {
                if (err) {
                    console.log(err); // no next is being passed and middleware stops the code chain
                } else {
                    console.log('Current Token used >>> ' + decodedToken.userId);
                    // console.log(decodedToken.userId);
                    next();
                }
            }
        );
    } else {
        console.log('Token could not be found!');
    }
};