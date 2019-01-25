const User = require("../models/User")

const userCon = {
    index: (req, res) => {
        User.find({}).populate({
            path: "lists",
            populate: [
                { path: "items" }
            ]
        }).then(users => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.id).then(user => {
            res.send(user)
        })
    },
    create: (req, res) => {
        User.create(req.body).then(user => {
            res.send(user)
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(user => {
            res.send(user)
        })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id).then(user => {
            res.send(user)
        })
    }
}

module.exports = userCon