const Worker = require('../models/Worker')

class SiteController {

    //[get] / home
    index(req, res, next) {

        // Worker.find({})
        //     .then(workers => res.json(workers))
        //     .catch(next)

        res.render('home');
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