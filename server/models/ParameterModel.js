const mongoose = require('mongoose')

const ParameterModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Характеристика'
    },
    code: {
        type: String,
        required: true,
        default: 'PARAMETER'
    },
    category: String,
    order: Number,
    relationType: {
        // linear:          result = a + b * input
        // exponential:     result = a + b ^ input
        type: String,
        default: 'linear'
    }
})

module.exports = ParameterModel = mongoose.model('parameterModel', ParameterModelSchema)