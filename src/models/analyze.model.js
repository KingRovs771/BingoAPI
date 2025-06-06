const pool = require('../config/db');

class AnalyzeModel {
    static async createAnalyzeEntry(analyze_uid, user_uid, ip_user, description, image) {
        const result = await pool.query(
            `INSERT INTO analyze (analyze_uid, user_uid, ip_user, description, image, created_at, update_at) VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *`, [analyze_uid, user_uid, ip_user, description, image]);
        return result.rows[0];
    }

    static async countRecentAnalyzeEntriesByIp(ip_user) {
        const result = await pool.query(
            `SELECT COUNT(*) FROM analyze WHERE ip_user = $1 AND created_at >= NOW() - INTERVAL '24 hours'`, [ip_user]);
        return parseInt(result.rows[0].count, 10);
    }

    static async getAllAnalyzeEntries() {
        const result = await pool.query(
            'SELECT analyze_uid, user_uid, ip_user, description, image, created_at, update_at FROM analyze');
        return result.rows;
    }
}

module.exports = AnalyzeModel;