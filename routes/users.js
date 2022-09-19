const express = require('express')
const usersController = require('../controllers/users')
const { checkJwt } = require('../middleware/index')
const router = express.Router()

// router.get('/', usersController.getAllUsers)

// router.get('/:id', usersController.getUserById)

router.post('/', checkJwt, usersController.createUser)

router.put('/:id', checkJwt, usersController.updateUser)

router.delete('/:id', checkJwt, usersController.deleteUser)

module.exports = router