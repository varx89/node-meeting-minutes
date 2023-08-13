const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const handleAuth = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        });
    } else {
        res.json(null);
    }
};

module.exports = handleAuth;
