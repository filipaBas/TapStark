const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.get('/play/:txHash', gameController.playGame);

module.exports = router;