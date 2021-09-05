const Worker = require('../models/Worker')
const { manyMongooseToObject } = require('../../util/mongoose')

class SiteController {

    //[get] / home
    index(req, res, next) {

        Worker.find({})
            .then(workers => res.render('home', {
                workers: manyMongooseToObject(workers)
            }))
            .catch(next)
        // 
    }

    //[get] / news
    getNews(req,res) {
        res.render('news')
    }

    //[get] / service
    getService(req,res) {
        res.render('service')
    }

}

module.exports = new SiteController