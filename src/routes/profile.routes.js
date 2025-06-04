const expresss = require('express');
const { getProfile } = require('../controllers/profile.controller');

const router = expresss.Router();

router.get('/userProfile', getProfile);

module.exports = router ;
