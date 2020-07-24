const mongoose = require('mongoose')

const DictionarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Справочник'
    },
    code: {
        type: String,
        required: true,
        default: 'DICTIONARY'
    },
    models: Array
})

module.exports = Dictionary = mongoose.model('dictionary', DictionarySchema)