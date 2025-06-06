const AnalyzeService = require('../services/analyze.service');
const { errorResponse } = require('../utils/response.util');

const analyzeRateLimit = async (req, res, next) => {
    const user_uid = req.user ? req.user.id : null;
    const ip_user = req.ip;

    if (user_uid) {
        console.log(`AnalyzeRateLimit: User ${user_uid} is authenticated. Bypassing analyze rate limit.`);
        return next();
    }

    try {
        console.log(`AnalyzeRateLimit: Unauthenticated user from IP ${ip_user}. Checking analyze rate limit.`);
        const isLimited = await AnalyzeService.isIpRateLimited(ip_user);

        if (isLimited) {
            console.log(`AnalyzeRateLimit: IP ${ip_user} has exceeded the 3x analyze limit.`);
            return errorResponse(res, new Error('You have exceeded the analysis limit (3 per 24 hours). Please register or try again later.'), 429); // 429 Too Many Requests
        }

        console.log(`AnalyzeRateLimit: IP ${ip_user} is within the analyze limit.`);
        next();
    } catch (error) {
        console.error('AnalyzeRateLimit: Error in middleware:', error);
        errorResponse(res, error, 500);
        next(error);
    }
};

module.exports = analyzeRateLimit;
