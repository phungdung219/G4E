const express = require('express')
const router = express.Router()

const introduceController= require('../app/controllers/IntroduceController')


router.use('/detail', introduceController.show)
router.use('/', introduceController.index)

module.exports= router