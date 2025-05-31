const express = require('express');
const { checkDatabaseConnection} = require('../controllers/db.controller');

const router = express.Router();

router.get('/db-check', checkDatabaseConnection)

module.exports = router;

