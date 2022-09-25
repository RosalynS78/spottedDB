const express = require('express');
const usersController = require('../controllers/users');

const { checkJwt } = require('../middleware/index.js');

const router = express.Router()

// testing and admin purpose
// router.get('/', usersController.getAllUsers)

// router.get('/:id', usersController.getUserById)

router.post('/', checkJwt, usersController.createUser)

router.put('/:id', checkJwt, usersController.updateUserById)

router.delete('/:id', checkJwt, usersController.deleteUser)



module.exports = router