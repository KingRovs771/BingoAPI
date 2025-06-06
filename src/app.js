const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

//routes
const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const dbRoutes = require('./routes/db.routes');
const profileRoutes = require('./routes/profile.routes');
const articleRoutes = require('./routes/article.routes');
const analyzeRoutes = require('./routes/analyze.routes');
//express
const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/db', dbRoutes);
app.use('/api/user', profileRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/analyze', analyzeRoutes);

const PORT = process.env.PORT;

module.exports = app;
