const mongoose = require("mongoose")

const connection = async() => {

    try {

        let dbPort = 27017
        await mongoose.connect("mongodb://0.0.0.0:27017/wunjo_socialmedia")
        
        console.log("[OK] Database connected: \"wunjo_socialmedia\" on port:", dbPort)

    } catch (error) {
        console.log(error)
        throw new Error("Database no connected!!!")
    }
}

module.exports = connection