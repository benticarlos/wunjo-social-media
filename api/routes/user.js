const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

// Route
router.get("/test-user", UserController.testUser)

// Router export
module.exports = router