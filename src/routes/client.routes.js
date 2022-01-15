const express = require('express');
const clientController = require('../controller/client.controller.js');

const router = express.Router();

router.get('/client', clientController)
