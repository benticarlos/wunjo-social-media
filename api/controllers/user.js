const testUser = (req, res) => {
    return res.status(200).send({
        message: "Message send from: controller/user.js"
    })
}

module.exports = {
    testUser
}