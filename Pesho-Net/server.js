import express from 'express';
import db from './config/db.js';
import * as dotenv from 'dotenv';
import router from './routes/userRoutes.js';

dotenv.config({ path: './config/.env', });

const app = express();

// routes
app.use('/api/user', router);

// server
app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});