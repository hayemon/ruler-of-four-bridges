const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Умение'
    },
    code: {
        type: String,
        required: true,
        default: 'SKILL'
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    imgUrl: String,

    type: {
        type: String,
        required: true,
        default: 'Активный'
        // active, passive, both
    },
    actionTypes: {
        type: String,
        required: true,
        default: ''
        // attack, defence, buff, debuff, aura, control, create, effect, summon
    },

    targetType: {
        type: String,
        required: true,
        default: 'На цель'
        // self, unit, point, around, direction
    },
    singleTarget: {
        type: Boolean,
        required: true,
        default: true
    },
    areaType: String, // vector, circle, sector, sphere, cylinder, cone, pyramid, box
    areaParameters: {
        type: Object,
        default: {}
    },

    affectedUnits: {
        type: String,
        required: true,
        default: ''
        // ally, enemy, structure
    },
    maximumAffectedUnitsCount: Object,

    attributes: {
        type: String,
        required: true,
        default: ''
        // physical, magical, fire, ice, etc.
    },

    timeParameters: {
        type: Object,
        default: {}
    },
    costs: {
        type: Array,
        default: []
    },
    parameters: {
        type: Array,
        default: []
    }
})

module.exports = Skill = mongoose.model('skill', SkillSchema)