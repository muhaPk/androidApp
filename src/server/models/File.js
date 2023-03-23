const {Schema, model} = require("mongoose")

const File = new Schema({
    name: {type: String, required: true, unique: true},
    belongs: {type: String, required: true},
    host_id: {type: String, required: false},
    type: {type: String, required: true},
    path: {type: String, required: true},
    user: {type: String, required: true},
    size: {type: String, required: true},
})

module.exports = model('File', File)
