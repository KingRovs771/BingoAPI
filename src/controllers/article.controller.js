const ArticleService = require('../services/article.service');
const {successResponse, errorResponse} = require("../utils/response.util");

class ArticleController {
    static async createArticle(req, res, next) {
        try {
            const { judul_article, description, image_thumb } = req.body;
            const authorUid = req.user.id;

            const newArticle = await ArticleService.createArticle(authorUid, judul_article, description, image_thumb);
            successResponse(res, newArticle, 'Article created successfully', 201);
        } catch (error) {
            console.error('Error creating article:', error);
            errorResponse(res, error, 500);
            next(error);
        }
    }
    static async getAllArticles(req, res, next) {
        try {
            const articles = await ArticleService.getAllArticles();
            successResponse(res, articles, 'Articles retrieved successfully', 200);
        } catch (error) {
            console.error('Error getting all articles:', error);
            errorResponse(res, error, 500);
            next(error);
        }
    }

    static async getArticleByUid(req, res, next) {
        try {
            const { article_uid } = req.params;
            const article = await ArticleService.getArticleByUid(article_uid);
            successResponse(res, article, 'Article retrieved successfully', 200);
        } catch (error) {
            console.error('Error getting article by UID:', error);
            if (error.message === 'Article not found.') {
                errorResponse(res, error, 404);
            } else {
                errorResponse(res, error, 500);
            }
            next(error);
        }
    }

    static async updateArticle(req, res, next) {
        try {
            const { article_uid } = req.params;
            const { judul_article, description, image_thumb } = req.body;
            const authorUid = req.user.id;

            const updates = { judul_article, description, image_thumb };
            const updatedArticle = await ArticleService.updateArticle(article_uid, authorUid, updates);
            successResponse(res, updatedArticle, 'Article updated successfully', 200);
        } catch (error) {
            console.error('Error updating article:', error);
            if (error.message === 'Article not found or you are not the author.') {
                errorResponse(res, error, 403);
            } else {
                errorResponse(res, error, 500);
            }
            next(error);
        }
    }

    static async deleteArticle(req, res, next) {
        try {
            const { article_uid } = req.params;
            const authorUid = req.user.id;

            const deletedArticle = await ArticleService.deleteArticle(article_uid, authorUid);
            successResponse(res, deletedArticle, 'Article deleted successfully', 200);
        } catch (error) {
            console.error('Error deleting article:', error);
            if (error.message === 'Article not found or you are not the author.') {
                errorResponse(res, error, 403);
            } else {
                errorResponse(res, error, 500);
            }
            next(error);
        }
    }
}

module.exports = ArticleController;