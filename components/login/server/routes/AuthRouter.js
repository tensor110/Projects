const { signupValidation, signinValidation } = require('../middlewares/AuthValidation')
const {signup, signin} = require('../controllers/AuthController')

const router = require('express').Router()

router.post('/signin', signinValidation, signin)
router.post('/signup', signupValidation, signup)

module.exports = router