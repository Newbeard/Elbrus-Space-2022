require('dotenv').config();
const express = require('express');
const path = require('path');
const config = require('./config/config');
const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 4000;

const app = express();

config(app);

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'));
});

app.listen(PORT, async () => {
});
