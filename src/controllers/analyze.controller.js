const {errorResponse, successResponse} = require("../utils/response.util");
const AnalyzeService = require("../services/analyze.service");

class AnalyzeController {
    static async createAnalyzeEntry(req, res, next) {
        try {
            const { description, image } = req.body;
            const user_uid = req.user ? req.user.id : null; // user_uid akan null jika tidak ada token atau token tidak valid
            const ip_user = req.ip; // Dapatkan IP klien dari Express

            const newEntry = await AnalyzeService.createAnalyzeEntry(user_uid, ip_user, description, image);
            successResponse(res, newEntry, 'Analysis entry created successfully', 201);
        } catch (error) {
            console.error('AnalyzeController.createAnalyzeEntry error:', error);
            errorResponse(res, error, 500);
            next(error);
        }
    }

    static async getAllAnalyzeEntries(req, res, next) {
        try {
            const entries = await AnalyzeService.getAllAnalyzeEntries();
            successResponse(res, entries, 'Analyze entries retrieved successfully', 200);
        } catch (error) {
            console.error('AnalyzeController.getAllAnalyzeEntries error:', error);
            errorResponse(res, error, 500);
            next(error);
        }
    }
}
module.exports = AnalyzeController;