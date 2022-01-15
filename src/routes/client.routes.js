const express = require('express');
const {getClient} = require('../controller/client.controller.js');

const router = express.Router();

router.get('/client', getClient)
