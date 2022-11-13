const express = require('express')
const router = express.Router()

const registController= require('../app/controllers/RegistController')


router.get('/', registController.index)
router.post('/', registController.signUp)


module.exports= router