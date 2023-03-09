const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const blogsRouter = require('./routes/blogs');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/api', indexRouter);
app.use('/api/blogs', blogsRouter);

module.exports = app;
