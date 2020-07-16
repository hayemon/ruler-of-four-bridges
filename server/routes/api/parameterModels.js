const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const ParameterModel = require('../../models/ParameterModel')
const checkObjectId = require('../../middleware/checkObjectId')

// @route    POST api/parameterModels
// @desc     Create a parameterModel
// @access   Private
router.post(
  '/', [auth,
  [
    check('name', 'name is required').not().isEmpty()
  ]
],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newParameterModel = new ParameterModel({
        name: req.body.name,
        relation: req.body.relation
      })
      const parameterModel = await newParameterModel.save()
      res.json(parameterModel)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/parameterModels
// @desc     Get all parameterModels
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const parameterModels = await ParameterModel.find()
    res.json(parameterModels)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/parameterModels/:id
// @desc     Get parameterModel by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const parameterModel = await ParameterModel.findById(req.params.id)
    res.json(parameterModel)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/parameterModels/:id
// @desc     Delete a parameterModel
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    await ParameterModel.findByIdAndDelete(req.params.id)
    res.json({ msg: 'ParameterModel removed' })
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router