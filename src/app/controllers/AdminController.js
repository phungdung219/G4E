const Worker = require('../models/Worker')
const { manyMongooseToObject } = require('../../util/mongoose')

class AdminController {

    //[get] /admin/stored/workers
    storedWorkers(req,res,next) {
        Worker.find({})
            .then(workers => res.render('admin/stored-workers', {
                workers: manyMongooseToObject(workers),
                account: req.data

            }))
            .catch(next)
    }

}

module.exports = new AdminController