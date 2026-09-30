import { db } from './config.js';
import jwt from 'jsonwebtoken';
import SERVER_KEY from './config.js';
export function MiddleWare(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
        res.status(401).json('Not Authorized');
    } else {
        const token_str = req.headers.authorization;
        const token = token_str.split(" ")[1];
        try {
            const decodedUser = jwt.verify(token, SERVER_KEY);
            const query = 'SELECT * FROM usertable WHERE userName = ?';
            db.query(query, decodedUser.name, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json('Database Error');
                }
                if (result.length === 0) {
                    return res.status(401).json('User does not exist');
                }
                req.user = result[0];
                next();
            })
        } catch (err) {
            console.log(err);
            res.status(401).json(err)
        }
    }
}