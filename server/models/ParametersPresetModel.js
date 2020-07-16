const mongoose = require('mongoose')

const ParametersPresetModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Характеристика'
    },
    parameters: {
        type: Array,
        require: true,
        default: []
    }
})

module.exports = ParametersPresetModel = mongoose.model('parametersPresetModel', ParametersPresetModelSchema)