const pool = require('../config/db');

const getAllArticle = async () => {
  const resultAllArticle = await pool.query('SELECT article_uid, judul_article, author, createDate, ');
};
