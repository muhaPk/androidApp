const {Schema, model} = require("mongoose")

const GroupMessage = new Schema({
    user_id: {type: String, required: true},
    group_id: {type: String, required: true},
    message: {type: String},
    date: {type: Date, default: Date.now}
})

module.exports = model('GroupMessage', GroupMessage)