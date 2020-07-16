const {Schema, model} = require('mongoose')

let workoutsModel = model('workout', new Schema
(
    {
        text: String,
        isDone: Boolean
    }
))

module.exports = workoutsModel