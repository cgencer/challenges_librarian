const jwt = require('jsonwebtoken')

const api_config = require("../config/api.js");

const authVerifier = (req, res, next) => {

//TODO: Implement authentication as User routes middleware...
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, api_config.api.jwt_secret, (err, user) => {
            if (err) res.status(401).json("Invalid token");
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json("Not authenticated");
    }
}

/* check if the current user */
const accessVerifier = (req, res, next) => {
    authVerifier(req, res, () => {
        if (req.user.id === req.params.id) {
            next()
        } else {
            res.status(403).json("Not allowed to perform this task");
        }
    })
}
export {};
module.exports = { authVerifier, accessVerifier };