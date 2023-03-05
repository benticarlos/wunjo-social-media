const express = require('express')
const router = express.Router()
const FollowController = require('../controllers/follow')

// Route
router.get("/test-follow", FollowController.testFollow)

// Router export
module.exports = router