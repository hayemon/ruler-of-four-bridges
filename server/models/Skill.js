const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Навык'
    },
    code: {
        type: String,
        required: true,
        default: 'SKILL'
    },

    type: {
        type: String,
        required: true,
        default: 'active'
        // active, passive, both
    },
    actionType: {
        type: Array,
        required: true,
        default: []
        // attack, defence, buff, debuff, aura, control, create, effect, summon
    },

    targetType: {
        type: String,
        required: true,
        default: 'unit'
        // self, unit, point, around, direction
    },
    singleTarget: {
        type: Boolean,
        required: true,
        default: true
    },
    areaType: String, // vector, circle, sector, sphere, cylinder, cone, pyramid, box
    areaParameters: {
        distance: Number,
        radius: Number,
        angleHorizontal: Number,
        angleVertical: Number,
        height: Number,
        width: Number
    },

    affectedUnits: {
        type: Array,
        required: true,
        default: []
        // ally, enemy, structure
    },
    maximumAffectedUnitsCount: Number,

    attributes: {
        type: Array,
        required: true,
        default: []
        // physical, magical, fire, ice, etc.
    },

    time: {
        cooldown: Number,
        cast: Number,
        duration: Number,
        channelingDuration: Number,
        interval: Number
    },
    cost: Array,
    fields: Object
})

module.exports = Skill = mongoose.model('skill', SkillSchema)