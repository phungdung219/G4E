const express = require('express')
const router = express.Router()

const workerController= require('../app/controllers/WorkerController')


router.get('/create', workerController.create)
router.get('/:id/edit', workerController.edit)
router.put('/:id', workerController.update)
router.delete('/:id', workerController.delete)
router.post('/store', workerController.store)
router.get('/:slug', workerController.show)


module.exports= router