const express = require('express')
const usersController = require('../controllers/users')
// const { checkJwt } = require('../middleware/index')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

// router.post('/', checkJwt, usersController.createUser)

router.post('/', usersController.createUser)

// router.put('/:id', checkJwt, usersController.updateUser)

router.put('/:id', usersController.updateUserById)


// router.delete('/:id', checkJwt, usersController.deleteUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router