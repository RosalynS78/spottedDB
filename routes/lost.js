const express = require('express');
const lostController = require('../controllers/lost');

const { checkJwt } = require('../middleware/index.js');

const router = express.Router()

router.get('/', lostController.getAllLost)

router.get('/:id', lostController.getLostById)

// router.post('/', checkJwt, lostController.createLost)
router.post('/', lostController.createLost)

router.put('/:id', lostController.updateLost)

router.delete('/:id', lostController.deleteLost)

module.exports = router