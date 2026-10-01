import { db } from './config.js';
import jwt from 'jsonwebtoken';
import express from 'express';
import SERVER_KEY from './config.js';
import  {MiddleWare}  from './Auth.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())

console.log("SERVER_KEY exists:", !!process.env.SERVER_KEY);

app.post('/login', (req, res) => {
    let name = req.body.name;
    let pass = req.body.password
    console.log(name, pass);
    const query = 'SELECT * FROM usertable WHERE userName = ? and password = ?';
    var values = [name, pass];
    db.query(query, values, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        if (result.length > 0) {
            res.json(result);
        } else {
            console.log(err);
            res.status(401).json('User Not Found!');
        }
    });
});

app.post('/adduser', (req, res) => {
    let name = req.body.name;
    let pass = req.body.password;
    const payload = { name };
    const token = jwt.sign(payload, SERVER_KEY, { expiresIn: '30d' });
    const query = 'INSERT INTO usertable(userName , password , token) VALUES (? , ? , ?)';
    const values = [name, pass, token];
    console.log('hbj');
    db.query(query, values, (err, result) => {
        console.log("Error --->", err);
        if (err) {
            res.status(400).json(err);
        }
        console.log("Result --->", result);
        res.json(token);///61 line number
    })

})

app.get('/protected',MiddleWare,(req,res)=>{
    res.status(200).json('Authenticated!');
})
export default app;