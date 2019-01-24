const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    name: String,
    categories: [],
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('Item', Item)