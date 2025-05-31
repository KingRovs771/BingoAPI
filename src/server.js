const app = require('./app.js');
const http = require('http');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}` // Load sesuai environment
});

const PORT = process.env.PORT || 8888;

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

server.on('error', (err) => {
    console.log("Server Error :", err.message)
})

module.exports = server;
