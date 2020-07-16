const mongoose = require('mongoose')

const ParameterModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Характеристика'
    },    
    relation: {
        type: {
            type: String,
            default: 'linear'
        },
        linear: {
            // y = ax + b
            a: {
                type: Number,
                default: 1
            },
            b: {
                type: Number,
                default: 0
            }
        },
        exponential: {
            // y = a * b^x
            a: {
                type: Number,
                default: 1
            },
            b: {
                type: Number,
                default: 0
            }
        }
    }
})

module.exports = ParameterModel = mongoose.model('parameterModel', ParameterModelSchema)