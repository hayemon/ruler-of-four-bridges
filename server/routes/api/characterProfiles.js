const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const CharacterProfile = require('../../models/CharacterProfile')
const ParameterModel = require('../../models/ParameterModel')
const checkObjectId = require('../../middleware/checkObjectId')

// @route    POST api/characterProfiles
// @desc     Create a characterProfile
// @access   Private
router.post(
  '/', [auth,
  [
    check('name', 'name is required').not().isEmpty(),
    check('gameName', 'gameName is required').not().isEmpty()
  ]
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const newCharacterProfile = new CharacterProfile({
        name: req.body.name,
        gameName: req.body.gameName,
        alias: req.body.alias,
        world: req.body.world,
        race: req.body.race,
        gameId: req.body.gameId,
        stats: req.body.stats,
        skills: req.body.skills
      })
      const characterProfile = await newCharacterProfile.save()
      res.json(characterProfile)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    GET api/characterProfiles
// @desc     Get all characterProfiles
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const characterProfiles = await CharacterProfile.find()
    res.json(characterProfiles)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    GET api/characterProfiles/:id
// @desc     Get characterProfile by ID
// @access   Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const characterProfile = await CharacterProfile.findById(req.params.id)
    res.json(characterProfile)
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route    PUT api/characterProfiles
// @desc     Update a characterProfile
// @access   Private
router.put(
  '/:id', [auth, checkObjectId('id')],
  async (req, res) => {
    try {
      const updateQuery = {
        name: req.body.name,
        gameName: req.body.gameName,
        alias: req.body.alias,
        world: req.body.world,
        race: req.body.race,
        gameId: req.body.id,
        stats: req.body.stats,
        skills: req.body.skills
      }

      const characterProfile = await CharacterProfile.findOneAndUpdate(
        { id: req.body.id },
        updateQuery,
        { new: true }
      )
      res.json(characterProfile)
    }
    catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route    DELETE api/characterProfiles/:id
// @desc     Delete a characterProfile
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    await CharacterProfile.findByIdAndDelete(req.params.id)
    res.json({ msg: 'CharacterProfile removed' })
  }
  catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
