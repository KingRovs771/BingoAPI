const expresss = require('express');
const ProfileControler  = require('../controllers/profile.controller');
const authentication = require('../middlewares/auth.middleware');

const router = expresss.Router();

router.get('/userProfile', authentication, ProfileControler.getProfile)

module.exports = router ;
