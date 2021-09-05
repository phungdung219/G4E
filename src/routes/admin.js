const express = require('express')
const router = express.Router()

const adminController= require('../app/controllers/AdminController')


router.get('/stored/workers', adminController.storedWorkers)


module.exports= router