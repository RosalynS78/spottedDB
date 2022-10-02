const express = require('express');
const foundController = require('../controllers/found');

const { checkJwt } = require('../middleware/index.js');

const router = express.Router()

router.get('/', foundController.getAllFound)

router.get('/:id', foundController.getFoundById)

router.post('/', foundController.createFound)

router.put('/:id', foundController.updateFound)

router.delete('/:id', foundController.deleteFound)


module.exports = router