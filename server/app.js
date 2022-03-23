require('dotenv').config();
const express = require('express');
const path = require('path');
const config = require('./config/config');
const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 4000;

const app = express();

config(app);

app.use('/', indexRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.status(404);
});

app.listen(PORT, async () => {
});
