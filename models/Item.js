const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    qty: Number,
    category: String,
    buy: { type: Boolean, default: false },
    bought: { type: Boolean, default: false },
    complete: { type: Boolean, default: false }
})

module.exports = mongoose.model('Item', Item)