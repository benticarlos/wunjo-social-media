const express = require('express')
const router = express.Router()
const PublicationController = require('../controllers/publication')

// Route
router.get("/test-pub", PublicationController.testPublication)

// Router export
module.exports = router