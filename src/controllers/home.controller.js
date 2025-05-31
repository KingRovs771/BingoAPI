
const homeBingo = (req, res) => {
    res.status(200).json({
        message: 'Welcome to Bingo API',
        version: '1.0.0',
        status: 'OK'
    });
};

module.exports = {homeBingo}