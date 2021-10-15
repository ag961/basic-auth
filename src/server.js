'use strict';

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);


app.get('/', (req, res) => {
  res.status(200).send('Hello world');
})


app.use('*', notFoundHandler);
app.use(errorHandler);


const start = (port) => {
  if (!port) {
    throw new Error('no port provided')
  }
  app.listen(port, () => console.log(`Server up on ${port}`))
}

module.exports = {
  start,
  app
}