let mongoose = require('mongoose')

let counterSchema = mongoose.Schema({
    seq: {type: Number, default: 100}
})

let Counter = module.exports = mongoose.model('Counter', counterSchema, 'counter')
