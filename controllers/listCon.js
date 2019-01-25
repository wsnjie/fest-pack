const List = require("../models/List")

const listCon = {
    index: (req, res) => {
        List.find({}).then(lists => {
            res.send(lists)
        })
    },
    show: (req, res) => {
        List.findById(req.params.id).then(list => {
            res.send(list)
        })
    },
    create: (req, res) => {
        List.create(req.body).then(list => {
            res.send(list)
        })
    },
    update: (req, res) => {
        List.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(list => {
            res.send(list)
        })
    },
    delete: (req, res) => {
        List.findByIdAndDelete(req.params.id).then(list => {
            res.send(list)
        })
    }
}

module.exports = listCon