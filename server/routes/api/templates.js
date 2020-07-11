const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const Template = require('../../models/Template')
const checkObjectId = require('../../middleware/checkObjectId')

// @route    POST api/templates
// @desc     Create a template
// @access   Private
router.post(
  '/',
  [auth, [check('templateField1', 'templateField1 is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newTemplate = new Template({
        templateField1: req.body.templateField1,
        templateField2: req.body.templateField2,
        templateField3: req.body.templateField3
      })

      const template = await newTemplate.save()

      res.json(template)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/templates
// @desc     Get all templates
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const templates = await Template.find()
    res.json(templates)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/templates/:id
// @desc     Get template by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const template = await Template.findById(req.params.id)

    res.json(template)
  } catch (err) {
    console.error(err.message)

    res.status(500).send('Server Error')
  }
})

// @route    DELETE api/templates/:id
// @desc     Delete a template
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const template = await Template.findById(req.params.id)
    
    await template.remove()

    res.json({ msg: 'Template removed' })
  } catch (err) {
    console.error(err.message)

    res.status(500).send('Server Error')
  }
})

module.exports = router
