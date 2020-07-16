const mongoose = require('mongoose')

const CharacterProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gameName: {
        type: String,
        required: true
    },
    world: String,
    race: String,
    gameId: String,

    alias: Array,
    stats: Array,
    skills: Array,

    statsModel: Array
})

module.exports = CharacterProfile = mongoose.model('characterProfile', CharacterProfileSchema)