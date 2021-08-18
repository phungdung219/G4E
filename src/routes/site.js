const express = require('express')
const router = express.Router()

const siteController= require('../app/controllers/SiteController')


router.use('/news', siteController.getNews)
router.use('/', siteController.index)

module.exports= router