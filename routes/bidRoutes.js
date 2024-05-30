const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:itemId/bids', bidController.getBids);
router.post('/:itemId/bids', authMiddleware, bidController.placeBid);

module.exports = router;
