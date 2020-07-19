const mongoose = require('mongoose')

const CharacterProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    realName: {
        type: String,
        required: true
    },
    details: Array,
    description: Array,
    stats: Array,
    skills: Array
})

module.exports = CharacterProfile = mongoose.model('characterProfile', CharacterProfileSchema)