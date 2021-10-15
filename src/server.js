'use strict';

const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
/* const bcrypt = require('bcrypt');
const base64 = require('base-64'); */
/* const { Sequelize, DataTypes } = require('sequelize'); */

/* const basicAuth = require('./auth/basicAuth'); */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
})

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