const express = require('express')
const router = express.Router()
const LoginMiddleware = require('../app/middlewares/LoginMiddleware')

const adminController= require('../app/controllers/AdminController')


router.get('/stored/workers',LoginMiddleware.checkLogin,LoginMiddleware.checkAdmin,adminController.storedWorkers)


module.exports= router