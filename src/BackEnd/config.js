// import mysql from 'mysql2';
// import dotenv from 'dotenv';

// dotenv.config({ override: true });

// console.log("ENV KEYS:", Object.keys(process.env).filter(key =>
//     key.startsWith("DB_") || key === "SERVER_KEY"
// ));

// console.log("SERVER_KEY exists:", !!process.env.SERVER_KEY);
// console.log("SERVER_KEY length:", process.env.SERVER_KEY?.length);

// const SERVER_KEY = process.env.SERVER_KEY;

// const host = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     ssl: {
//         rejectUnauthorized: false
//     }
// };

// export default SERVER_KEY;

// export const db = mysql.createConnection(host);

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//         console.log('Connection Failed!');
//     } else {
//         console.log('Connection Successed!');
//     }
// });

import dotenv from 'dotenv';

const result = dotenv.config({
    path: './.env',
    override: true
});

console.log("DOTENV ERROR:", result.error);
console.log("DOTENV SERVER_KEY LENGTH:", result.parsed?.SERVER_KEY?.length);
console.log("PROCESS SERVER_KEY LENGTH:", process.env.SERVER_KEY?.length);

import mysql from 'mysql2';

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

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//         console.log('Connection Failed!');
//     } else {
//         console.log('Connection Successed!');
//     }
// });

db.connect((err) => {
    if (err) {
        console.log('DB ERROR CODE:', err.code);
        console.log('DB ERROR MESSAGE:', err.message);
        console.log('DB ERROR:', err);
        return;
    }

    console.log('Connection Successed!');
});