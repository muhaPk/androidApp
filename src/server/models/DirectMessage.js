const {Schema, model} = require("mongoose")

const DirectMessage = new Schema({
    user_id: {type: String, required: true},
    talk_id: {type: String, required: true},
    message: {type: String},
    date: {type: Date, default: Date.now}
})

module.exports = model('DirectMessage', DirectMessage)