const {Schema, model} = require("mongoose")

const Group = new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: false, default: ''},
    followers_count: {type: Number, required: false, default: 0},
    coordX: {type: Number, required: false, default: 0},
    coordY: {type: Number, required: false, default: 0},
    avatar: {type: String, default: ''},
})

module.exports = model('Group', Group)