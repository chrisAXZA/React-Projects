import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import db from './config/db.js';
import router from './routes/userRoutes.js';
import { checkUserLogStatus, requireAuth } from './middleware/authMiddleware.js';

dotenv.config({ path: './config/.env', });

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use(cookieParser());

// jwt, for all routes apply checkUserLogStatus to validate whether token and userId is valid
app.get('*', checkUserLogStatus);
app.get('/jwtid', requireAuth, (req, res) => {
    // route will only be used when the user initially access the app
    // in order to verify whether the user's token is already stored in 
    // order to automatically register the given user (user will be automatically logged in)
    res.status(200).send(res.locals.user._id);
});

// routes
app.use('/api/user', router);

// server
app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});