const User = require("../models/User")

const userCon = {
    index: (req, res) => {
        User.find({}).then(users => {
            res.send(users)
        })
    }
    // show: (req, res) => {
    //     Creature.findById(req.params.id).then(creature => {
    //         res.send(creature)
    //     })
    // },
    // create: (req, res) => {
    //     Creature.create(req.body).then(creature => {
    //         res.send(creature)
    //     })
    // },
    // update: (req, res) => {
    //     Creature.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(creature => {
    //         res.send(creature)
    //     })
    // },
    // delete: (req, res) => {
    //     Creature.findByIdAndDelete(req.params.id).then(creature => {
    //         res.send(creature)
    //     })
    // }
}

module.exports = userCon