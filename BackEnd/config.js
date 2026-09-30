import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const SERVER_KEY = process.env.SERVER_KEY;

const host = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
};

export default SERVER_KEY;

export const db = mysql.createConnection(host);

db.connect((err) => {
    if (err) {
        console.log(err);
        console.log('Connection Failed!');
    } else {
        console.log('Connection Successed!');
    }
});