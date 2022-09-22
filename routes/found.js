const express = require('express')
const usersController = require('../controllers/found')
// const { checkJwt } = require('../middleware/index')
const router = express.Router()

router.get('/', usersController.getAllFound)

// router.post('/', checkJwt, usersController.createFound)

// router.put('/:id', checkJwt, usersController.updateFound)

// router.delete('/:id', checkJwt, usersController.deleteFound)

router.post('/', usersController.createFound)

router.put('/:id', usersController.updateFound)

router.delete('/:id', usersController.deleteFound)

module.exports = router