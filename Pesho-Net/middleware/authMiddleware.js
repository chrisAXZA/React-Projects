import jwt from 'jsonwebtoken';

import UserModel from '../models/userModel.js'

// next passed as last argument for middleware
export const checkUserLogStatus = (req, res, next) => {
    // extract cookie from req cookies
    // read cookie data with library cookie-parser
    const token = req.cookies.jwt;

};