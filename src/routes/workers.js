const express = require('express')
const router = express.Router()
const multer = require('multer')
const workerController= require('../app/controllers/WorkerController')
const LoginMiddleware = require('../app/middlewares/LoginMiddleware')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './src/public/uploads');
    },
    filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname);
    }
    });
    
    const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5}
    });

router.get('/create',LoginMiddleware.checkLogin,LoginMiddleware.checkAdmin, workerController.create)
router.get('/:id/edit', workerController.edit)
router.put('/:id', workerController.update)
router.delete('/:id', workerController.delete)
router.post('/store' ,upload.single('img'), workerController.store)
router.get('/:slug',LoginMiddleware.checkLogin, workerController.show)


module.exports= router