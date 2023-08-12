const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const saltRounds = Number(process.env.SALT);

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, function (err, hash) {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};

module.exports = {
    hashPassword,
    comparePassword,
};
