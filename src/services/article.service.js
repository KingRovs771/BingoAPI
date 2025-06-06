const ArticleModel = require('../models/article.model');
const { v4: uuidv4 } = require('uuid');

class ArticleService {
    static async createArticle(authorUid, judul_article, description, image_thumb) {
        if (!judul_article || !description || !authorUid) {
            throw new Error('Title, description, and author are required.');
        }
        const article_uid = uuidv4();
        const newArticle = await ArticleModel.creareArticle(article_uid, authorUid, judul_article, description, image_thumb);
        return newArticle;
    }

    static async getAllArticles() {
        return ArticleModel.getAllArticle();
    }

    static async getArticleByUid(article_uid) {
        const article = await ArticleModel.getArticleById(article_uid);
        if (!article) {
            throw new Error('Article not found.');
        }
        return article;
    }

    static async updateArticle(article_uid, authorUid, updates) {
        const updatedArticle = await ArticleModel.updateArticle(article_uid, authorUid, updates);
        if (!updatedArticle) {
            throw new Error('Article not found or you are not the author.');
        }
        return updatedArticle;
    }

    static async deleteArticle(article_uid, authorUid) {
        const deletedArticle = await ArticleModel.deleteArticle(article_uid, authorUid);
        if (!deletedArticle) {
            throw new Error('Article not found or you are not the author.');
        }
        return deletedArticle;
    }
}

module.exports = ArticleService;