const express = require('express')
const router = express.Router()
const LoginMiddleware = require('../app/middlewares/LoginMiddleware')

const introduceController= require('../app/controllers/IntroduceController')


router.get('/detail', introduceController.show)
router.get('/',LoginMiddleware.checkLogin, introduceController.index)

module.exports= router