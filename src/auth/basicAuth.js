'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Users } = require('../models/index');

let basicAuth = async (req, res, next) => {

  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.body.user = user;
      next();
    }
    else {
      next('Invalid User');
    }
  } catch (error) { res.status(403).send("Invalid Login"); }
}

module.exports = basicAuth;

