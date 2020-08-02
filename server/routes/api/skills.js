const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const Skill = require('../../models/Skill')
const checkObjectId = require('../../middleware/checkObjectId')

// @route    POST api/skills
// @desc     Create a skill
// @access   Private
router.post(
  '/', [auth,
  [
    check('name', 'name is required').not().isEmpty(),
    check('code', 'code is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty()
  ]
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newSkill = new Skill({
        name: req.body.name,
        code: req.body.code,
        description: req.body.description,
        imgUrl: req.body.imgUrl,

        type: req.body.type,
        actionTypes: req.body.actionTypes,
        targetType: req.body.targetType,
        singleTarget: req.body.singleTarget,
        areaType: req.body.areaType,
        areaParameters: req.body.areaParameters,

        affectedUnits: req.body.affectedUnits,
        maximumAffectedUnitsCount: req.body.maximumAffectedUnitsCount,
        attributes: req.body.attributes,
        timeParameters: req.body.timeParameters,

        costs: req.body.costs,
        parameters: req.body.parameters
      })
      const skill = await newSkill.save()
      res.json(skill)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/skills
// @desc     Get all skills
// @access   Private
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find()
    res.json(skills)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/skills/:id
// @desc     Get skill by ID
// @access   Private
router.get('/:id', [checkObjectId('id')], async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id)
    res.json(skill)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    PUT api/skills
// @desc     Update a skill
// @access   Private
router.put(
  '/:id', [auth, checkObjectId('id')],
  async (req, res) => {
    try {
      const updateQuery = {
        name: req.body.name,
        code: req.body.code,
        description: req.body.description,
        imgUrl: req.body.imgUrl,

        type: req.body.type,
        actionTypes: req.body.actionTypes,
        targetType: req.body.targetType,
        singleTarget: req.body.singleTarget,
        areaType: req.body.areaType,
        areaParameters: req.body.areaParameters,

        affectedUnits: req.body.affectedUnits,
        maximumAffectedUnitsCount: req.body.maximumAffectedUnitsCount,
        attributes: req.body.attributes,
        timeParameters: req.body.timeParameters,

        costs: req.body.costs,
        parameters: req.body.parameters
      }

      const skill = await Skill.findByIdAndUpdate(
        req.params.id,
        updateQuery,
        { new: true }
      )
      res.json(skill)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    DELETE api/skills/:id
// @desc     Delete a skill
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id)
    res.json({ msg: 'Skill removed' })
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
