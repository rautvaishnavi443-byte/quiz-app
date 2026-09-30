import mysql, { createConnection } from 'mysql2';


const SERVER_KEY = '#QUIZ_LOGIN_@MY_SERVER';
export default SERVER_KEY;



const host = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users',
}

export const db = mysql.createConnection(host);

db.connect((err) => {
    if (err) {
        console.log(err);
        console.log('Connection Failed!');
    } else {
        console.log('Connection Successed!');
    }
})
