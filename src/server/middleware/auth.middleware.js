const jwt = require("jsonwebtoken");
const config = require("config");


module.exports = (req, res, next) => {

    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization

        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        req.user = jwt.verify(token.split(' ')[1], config.get('secretKey'))

        next()

    } catch (e) {
        console.log("auth.middleware catch")
        return res.status(401).json({message: 'Auth error'})
    }

}
