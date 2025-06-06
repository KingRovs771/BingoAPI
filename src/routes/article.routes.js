const express = require('express');
const ArticleController = require('../controllers/article.controller');
const authenticateToken = require('../middlewares/auth.middleware'); // Middleware otentikasi yang sudah Anda miliki

const router = express.Router();

router.get('/articles', ArticleController.getAllArticles);
router.get('/articles/:article_uid', ArticleController.getArticleByUid);

router.post('/articles', authenticateToken, ArticleController.createArticle);
router.put('/articles/:article_uid', authenticateToken, ArticleController.updateArticle);
router.delete('/articles/:article_uid', authenticateToken, ArticleController.deleteArticle);

module.exports = router;