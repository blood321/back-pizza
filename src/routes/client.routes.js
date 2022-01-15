const express = require('express');
const {postClient, getClientId, putClient, deleteClient} = require('../controller/client.controller');

const router = express.Router();

router.get('/client', getClientId);
router.post('/client', postClient);
router.put('/client', putClient);
router.delete('/client', deleteClient);
