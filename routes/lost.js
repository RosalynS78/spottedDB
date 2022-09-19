const express = require('express')
const usersController = require('../controllers/lost')
const { checkJwt } = require('../middleware/index')
const router = express.Router()

router.get('/', usersController.getAllLost)

router.post('/', checkJwt, usersController.createLost)

router.put('/:id', checkJwt, usersController.updateLost)

router.delete('/:id', checkJwt, usersController.deleteLost)

module.exports = router