import express from 'express';
import * as dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config({ path: './config/.env', });

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});