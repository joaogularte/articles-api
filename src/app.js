/* Dependencias */
const express = require('express');

/* Routes */
const articleRoutes = require('./routes/article');

const app = express();

app.use('/articles', articleRoutes);

module.exports = app; 