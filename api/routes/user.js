const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

// Route
router.post("/register", UserController.register)

// Router export
module.exports = router