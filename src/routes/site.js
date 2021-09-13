const express = require('express')
const router = express.Router()

const siteController= require('../app/controllers/SiteController')


router.get('/news', siteController.getNews)
router.get('/service', siteController.getService)
router.get('/about', siteController.getAbout)

router.get('/', siteController.index)

module.exports= router