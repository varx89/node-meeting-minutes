const express = require('express');
const router = express.Router();
const handleLogin = require('../controllers/loginControler');
const handleRegister = require('../controllers/registerControler');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const URL_WEB = process.env.URL_WEB;

router.use(express.urlencoded({ extended: false }));
router.use(cors({ credentials: true, origin: URL_WEB }));

router.get('/', (req, res) => res.send('Loading...'));
router.post('/register', handleRegister);
router.post('/login', handleLogin);

module.exports = router;
