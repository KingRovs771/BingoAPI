const express = require('express');
const AnalyzeController = require('../controllers/analyze.controller');
const authenticateToken = require('../middlewares/auth.middleware');
const analyzeRateLimit = require('../middlewares/analyze.middleware');

const router = express.Router();

router.post('/analyze', authenticateToken, analyzeRateLimit, AnalyzeController.createAnalyzeEntry);

router.get('/analyze', AnalyzeController.getAllAnalyzeEntries);

module.exports = router;
