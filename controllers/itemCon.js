const Item = require("../models/Item")

const itemCon = {
    index: (req, res) => {
        Item.find({}).then(items => {
            res.send(items)
        })
    },
    show: (req, res) => {
        Item.findById(req.params.id).then(list => {
            res.send(list)
        })
    },
    create: (req, res) => {
        Item.create(req.body).then(item => {
            res.send(item)
        })
    },
    update: (req, res) => {
        Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(item => {
            res.send(item)
        })
    },
    delete: (req, res) => {
        Item.findByIdAndDelete(req.params.id).then(item => {
            res.send(item)
        })
    }
}

module.exports = itemCon