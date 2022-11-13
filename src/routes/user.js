const express = require('express')
const router = express.Router()
const LoginMiddleware = require('../app/middlewares/LoginMiddleware')

const userController= require('../app/controllers/UserController')


router.get('/info', userController.getInfo)
router.get('/transactions',LoginMiddleware.checkLogin, userController.getTrans)
router.get('/checkout/:slug',LoginMiddleware.checkLogin, userController.getCheckout)
router.post('/checkout/:slug',LoginMiddleware.checkLogin, userController.getPay)



module.exports= router