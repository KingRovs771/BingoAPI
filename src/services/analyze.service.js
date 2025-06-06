const AnalyzeModel = require('../models/analyze.model');
const { v4: uuidv4 } = require('uuid');

class AnalyzeService{
    static async createAnalyzeEntry(user_uid, ip_user, description, image) {
        if (!description || !ip_user) {
            throw new Error('Description and IP address are required for analysis.');
        }
        const analyze_uid = uuidv4();
        const newEntry = await AnalyzeModel.createAnalyzeEntry(analyze_uid, user_uid, ip_user, description, image);
        return newEntry;
    }

    static async isIpRateLimited(ip_user) {
        const count = await AnalyzeModel.countRecentAnalyzeEntriesByIp(ip_user);
        const MAX_FREE_ENTRIES = 3;
        console.log(`AnalyzeService: IP ${ip_user} has ${count} entries in last 24h. Limit is ${MAX_FREE_ENTRIES}.`);
        return count >= MAX_FREE_ENTRIES;
    }

    static async getAllAnalyzeEntries() {
        return AnalyzeModel.getAllAnalyzeEntries();
    }
}

module.exports = AnalyzeService;