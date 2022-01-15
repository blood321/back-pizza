const express = require('express');
const {postClient, getClientId, putClient, deleteClient} = require('../controller/client.controller');

const router = express.Router();

router.get('/', getClientId);
router.post('/', postClient);
router.put('/', putClient);
router.delete('/', deleteClient);

module.exports = router;