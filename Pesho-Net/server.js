import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import db from './config/db.js';
import router from './routes/userRoutes.js';

dotenv.config({ path: './config/.env', });

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));
app.use(cookieParser());

// routes
app.use('/api/user', router);

// server
app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});