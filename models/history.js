let mongoose = require('mongoose')

let historySchema = mongoose.Schema({
    event: String,
    code: Number,
    update: String,
    scoreAfterUpdate: Number
})

let History = module.exports = mongoose.Model('History', historySchema)
