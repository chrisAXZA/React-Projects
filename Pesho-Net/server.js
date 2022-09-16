import express from 'express';
import db from './config/db.js';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes/userRoutes.js';

dotenv.config({ path: './config/.env', });

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

// routes
app.use('/api/user', router);

// server
app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});