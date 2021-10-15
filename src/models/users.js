'use strict';

const bcrypt = require('bcrypt');

const UsersModel = (sequelize, DataTypes) => {
 const user = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  user.beforeCreate( async (user, options) => {
    let hashedPassword = await bcrypt.hash(user.password, 5);
    user.password = hashedPassword;
    return user.password;
  })

  return user;
};

module.exports = UsersModel;
