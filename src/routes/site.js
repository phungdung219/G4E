const express = require('express')
const router = express.Router()
const LoginMiddleware = require('../app/middlewares/LoginMiddleware')

const siteController= require('../app/controllers/SiteController')



router.get('/news',LoginMiddleware.checkLogin, siteController.getNews)
router.get('/service',LoginMiddleware.checkLogin, siteController.getService)
router.get('/about', siteController.getAbout)
router.get('/thanks', siteController.getThanks)
router.get('/:slug', siteController.get404 )

router.get('/', siteController.index)

module.exports= router