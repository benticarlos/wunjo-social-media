const connection = require("./database/connection")
const express = require("express")
const cors = require("cors")

// Database connection 
connection()
console.log("[OK] API Rest started successfully!!")

// Node server
const app = express()
const port = 4000

// CORS config
app.use(cors())

// Body data convert
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route config load
const userRoutes = require('./routes/user')
const publicationRoutes = require('./routes/publication')
const followRoutes = require('./routes/follow')

app.use('/api', userRoutes)
app.use('/api', publicationRoutes)
app.use('/api', followRoutes)

// Test route
app.get('/api/test', (req, res) => {
    return res.status(200).json(
        {
            "id": 1,
            "name": "Carlos Benti",
            "web": "wunjo.media"
        }
    )
})
// Listening server
app.listen(port, () => {
    console.log('[OK] Server running on port:', port)
})