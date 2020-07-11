const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
    templateField1: {
        type: String,
        required: true
    },
    templateField2: {
        type: String
    },
    templateField3: {
        type: String
    }
})

module.exports = Template = mongoose.model('template', TemplateSchema)