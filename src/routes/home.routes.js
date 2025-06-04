const express = require('express');
const { homeBingo } = require('../controllers/home.controller');

const router = express.Router();

router.get('/', homeBingo);

module.exports =  router;
