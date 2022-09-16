import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ path: './config/.env', });

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console.error, 'Connection Error:'));
db.once('open', function () {
    console.log(`DB is running on port >>> 27017`);
});

export default db;