let mongoose = require('mongoose')

let playerSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    college: String,
    year: String,
    code: Number,
    score: {type: Number, default: 0}
})

let Player = module.exports = mongoose.model('Player', playerSchema)
