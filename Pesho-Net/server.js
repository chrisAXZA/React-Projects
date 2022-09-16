import express from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config({ path: './config/.env', });

app.listen(process.env.PORT, () => {
    console.log(`App is running on Port >>> ${process.env.PORT}`);
});