const express = require('express');
const lostController = require('../controllers/lost');


// figure out why unable to post with jwt 
const { checkJwt } = require('../middleware/index.js');

const router = express.Router()

router.get('/', lostController.getAllLost)

router.get('/:id', lostController.getLostById)

// router.post('/', checkJwt, lostController.createLost)
router.post('/', lostController.createLost)

router.put('/:id', lostController.updateLost)

router.delete('/:id', lostController.deleteLost)

module.exports = router