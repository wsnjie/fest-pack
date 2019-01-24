const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    qty: Number,
    category: String,
    buy: Boolean,
    bought: Boolean,
    complete: Boolean
})

module.exports = mongoose.model('Item', Item)