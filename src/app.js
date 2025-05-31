const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

//routes
const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const dbRoutes = require('./routes/db.routes');
//express
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/health', dbRoutes);
app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT;

module.exports = app;
