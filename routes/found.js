const express = require('express');
const foundController = require('../controllers/found');

const { checkJwt } = require('../middleware/index.js');

const router = express.Router()

router.get('/', foundController.getAllFound)

router.get('/:id', foundController.getFoundById)

router.post('/', checkJwt, foundController.createFound)

router.put('/:id', checkJwt, foundController.updateFound)

router.delete('/:id', checkJwt, foundController.deleteFound)


module.exports = router