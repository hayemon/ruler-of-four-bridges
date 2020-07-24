const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const Dictionary = require('../../models/Dictionary')
const checkObjectId = require('../../middleware/checkObjectId')

// @route    POST api/dictionaries
// @desc     Create a dictionary
// @access   Private
router.post(
  '/', [auth,
  [
    check('name', 'name is required').not().isEmpty(),
    check('code', 'code is required').not().isEmpty()
  ]
],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newDictionary = new Dictionary({
        name: req.body.name,
        code: req.body.code,
        models: req.body.models
      })
      const dictionary = await newDictionary.save()
      res.json(dictionary)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/dictionaries
// @desc     Get all dictionaries
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const dictionaries = await Dictionary.find()
    res.json(dictionaries)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/dictionaries/:id
// @desc     Get dictionary by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const dictionary = await Dictionary.findById(req.params.id)
    res.json(dictionary)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    PUT api/dictionaries
// @desc     Update a dictionary
// @access   Private
router.put('/:id', [auth, checkObjectId('id')], async (req, res) => {
  console.log(req.params.id)
  try {
    const updateQuery = {
      name: req.body.name,
      code: req.body.code,
      models: req.body.models
    }

    const dictionary = await Dictionary.findByIdAndUpdate(
      req.params.id,
      updateQuery,
      { new: true }
    )
    res.json(dictionary)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}
)

// @route    DELETE api/dictionaries/:id
// @desc     Delete a dictionary
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    await Dictionary.findByIdAndDelete(req.params.id)
    res.json({ msg: 'Dictionary removed' })
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router