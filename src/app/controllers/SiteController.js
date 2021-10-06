const Worker = require('../models/Worker')
const Post = require('../models/Post')
const { manyMongooseToObject } = require('../../util/mongoose');
const { restart } = require('nodemon');


class SiteController {
    //[GET] /404
    get404(req,res) {
        res.render('404',{layout:false})
    }

    //[get] / home
    index(req, res, next) {

        var workers = Worker.find({})
                    .then(workers=> manyMongooseToObject(workers))
                    .catch(next);
        
        var posts = Post.find({})
                    .then(posts=> manyMongooseToObject(posts))
                    .catch(next);

        Promise.all([workers,posts])
            .then((values => res.render('home', {
                workers: values[0],
                posts: values[1]
            }))) 
            .catch(next)

    }

    //[get] / news
    getNews(req,res,next) {
        Post.find({})
            .then(posts => res.render('news', {
                posts: manyMongooseToObject(posts)
            }))
            .catch(next);
    }

    //[get] / service
    getService(req,res) {
        res.render('service')
    }

    //[get] / about
    getAbout(req,res) {
        res.render('about')
    }

}

module.exports = new SiteController