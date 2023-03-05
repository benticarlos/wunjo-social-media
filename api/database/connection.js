const mongoose = require("mongoose")

const connection = async () => {

    try {

        const dbPort = 27017
        await mongoose.connect("mongodb://localhost:27017/wunjo_socialmedia")

        console.log("[OK] Database connected: wunjo_socialmedia on port:", dbPort)

    } catch (error) {
        console.log(error)
        throw new Error("[ERROR]: Database no connected")
    }
}

module.exports = connection