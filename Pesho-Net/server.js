import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import db from './config/db.js';
import router from './routes/userRoutes.js';
import { checkUserLogStatus } from './middleware/authMiddleware.js';

dotenv.config({ path: './config/.env', });

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use(cookieParser());

// jwt, for all routes apply checkUserLogStatus to validate whether token and userId is valid
app.get('*', checkUserLogStatus);

// routes
app.use('/api/user', router);

// server
app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});