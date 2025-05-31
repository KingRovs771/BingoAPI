const successResponse = (res, data, message = 'Success', statusCode = 200) => {
    if (!res || typeof res.status !== 'function') {
        throw new Error('Invalid response object');
    }
    res.status(statusCode).json({ message, data });
};

const errorResponse = (res, error, statusCode = 500) => {
    res.status(statusCode).json({ error: error.message });
};

module.exports = { successResponse, errorResponse };
