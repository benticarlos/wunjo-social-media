const testPublication = (req, res) => {
    return res.status(200).send({
        message: "Message send from: controller/publication.js"
    })
}

module.exports = {
    testPublication
}