const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    password: String,
    lists: [{
        type: Schema.Types.ObjectId,
        ref: 'List'
    }]
})

module.exports = mongoose.model('User', User)