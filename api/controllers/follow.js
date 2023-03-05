const testFollow = (req, res) => {
    return res.status(200).send({
        message: "Message send from: controller/follow.js"
    })
}

module.exports = {
    testFollow
}