const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const jwtSecret = process.env.JWT_SECRET || config.get('jwtSecret')

const User = require('../../models/User')

const router = express.Router()

// @route   POST api/users
// @desc    SIGNUP user
// @access  Public
router.post('/', [
    check('username', 'Name is requried').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password',
        'Please enter a password with six or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req)
    const { username, email, password } = req.body
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }

        user = new User({
            username,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            jwtSecret,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err
                res.json({ token })
            }
        )
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router