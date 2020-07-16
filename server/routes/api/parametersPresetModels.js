const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const ParametersPresetModel = require('../../models/ParametersPresetModel')
const checkObjectId = require('../../middleware/checkObjectId')

// @route    POST api/parametersPresetModels
// @desc     Create a parametersPresetModel
// @access   Private
router.post(
  '/', [auth,
  [
    check('name', 'name is required').not().isEmpty(),
    check('parameters', 'parameters are required').not().isEmpty
  ]
],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newParametersPresetModel = new ParametersPresetModel({
        name: req.body.name,
        parameters: req.body.parameters
      })
      const parametersPresetModel = await newParametersPresetModel.save()
      res.json(parametersPresetModel)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/parametersPresetModels
// @desc     Get all parametersPresetModels
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const parametersPresetModels = await ParametersPresetModel.find()
    res.json(parametersPresetModels)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/parametersPresetModels/:id
// @desc     Get parametersPresetModel by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const parametersPresetModel = await ParametersPresetModel.findById(req.params.id)
    res.json(parametersPresetModel)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/parametersPresetModels/:id
// @desc     Delete a parametersPresetModel
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    await ParametersPresetModel.findByIdAndDelete(req.params.id)
    res.json({ msg: 'ParametersPresetModel removed' })
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router