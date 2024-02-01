const express = require('express');
const handleLogin = require('../controllers/loginController');
const handleRegister = require('../controllers/registerController');
const handleAuth = require('../controllers/authController');
const handleListProjects = require('../controllers/projectsController');
const addProject = require('../controllers/addProjectController');
const viewProject = require('../controllers/viewProjectController');
const editProject = require('../controllers/editProjectController');
const groupTasks = require('../controllers/groupTasksController');
const path = require('path');
const multer = require('multer');
// const dotenv = require('dotenv');
// dotenv.config();
const router = express.Router();
const cors = require('cors');

const URL_WEB = process.env.URL_WEB;
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images');
//     },
//     filename: (req, file, cb) => {
//         cb(
//             null,
//             file.fieldname + '_' + Date.now + path.extname(file.originalname)
//         );
//     },
// });
// const upload = multer({ storage: storage });

router.use(cors({ credentials: true, origin: URL_WEB }));

router.get('/', (req, res) => res.send('Loading...'));
router.post('/register', handleRegister);
router.post('/login', handleLogin);
router.get('/auth', handleAuth);
router.get('/projects', handleListProjects);
router.put('/addproject', addProject);
router.get('/project/:id', viewProject);
router.post('/project/:id', editProject);
router.get('projectGroup/:id');

module.exports = router;
