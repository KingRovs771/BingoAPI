const pool = require('../config/db');

class articleModels {

  static async getAllArticle () {
    const resultAllArticle = await pool.query("SELECT * FROM bingo_article");
    return resultAllArticle.rows;

  };

  static async creareArticle (article_uid, author, judul_article, description, image_thumb, create_at, update_at) {
    const resultCreate = await pool.query("INSERT INTO bingo_article (article_uid, author, judul_article, description, image_thumb, created_at, update_at ) VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *", [article_uid, author, judul_article, description, image_thumb]);
    return resultCreate.rows[0];
  }

  static async getArticleById (article_uid) {
    const resultById = await pool.query("SELECT article_uid, author, judul_article, description, image_thumb, created_at, update_at FROM bingo_article WHERE article_uid = $1", [article_uid]);
    return resultById.rows[0];
  }

  static async updateArticle(article_uid, author, updates) {
    const { judul_article, description, image_thumb } = updates;
    const result = await pool.query("UPDATE article SET judul_article = COALESCE($1, judul_article), description = COALESCE($2, description), image_thumb = COALESCE($3, image_thumb), update_at = NOW() WHERE article_uid = $4 AND author = $5 RETURNING *", [judul_article, description, image_thumb, article_uid, author]);
    return result.rows[0];
  }
  static async deleteArticle(article_uid, author) {
    const result = await pool.query('DELETE FROM article WHERE article_uid = $1 AND author = $2 RETURNING *',  [article_uid, author]);
    return result.rows[0];
  }
}
module.exports = articleModels;