'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('../auth/basicAuth');

const { Users } = require('../models/index');

router.get('/list', async (req, res) => {
  const response = await Users.findAll();
  res.status(200).json(response);
})

router.post('/signin', basicAuth, async (req, res) => {
  let user = req.body.user;
  res.status(200).json(user);
});

router.post('/signup', async (req, res) => {
  try {
    const record = await Users.create(req.body);
    res.status(200).json(record);
  }
  catch (e) {
    res.status(403).send("Error Creating User");
  }
});

module.exports = router;