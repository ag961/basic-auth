'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const users = require('./users');

module.exports = {
  db: sequelize,
  Users: users(sequelize, DataTypes)
}