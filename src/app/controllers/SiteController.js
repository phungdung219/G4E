const Worker = require('../models/Worker')
const Post = require('../models/Post')
const Account = require('../models/Account')
const { manyMongooseToObject } = require('../../util/mongoose');
const { MongooseToObject } = require('../../util/mongoose')

const jwt = require('jsonwebtoken')

const { restart } = require('nodemon');


class SiteController {
    //[GET] /404
    get404(req,res) {
        res.render('404',{layout:false})
    }

    //[get] / home
    index(req, res, next) {
        var account
        try {
            var token = req.cookies.token
            var idUser = jwt.verify(token,'mk')
            account = Account.findOne({_id:idUser})
            .then(data=>{
                if(data){
                    account = MongooseToObject(data)
                    return account
                    
                } else {
                    res.render('right',{layout:false})
                }
            })
        } catch(error) {
            
        }
        
        var workers = Worker.find({})
        .then(workers=> manyMongooseToObject(workers))
        .catch(next);
        
        var posts = Post.find({})
                    .then(posts=> manyMongooseToObject(posts))
                    .catch(next);
        
        Promise.all([workers,posts,account])
            .then((values => res.render('home', {
                workers: values[0],
                posts: values[1],
                account: values[2]
            }))) 
            .catch(next)
    }

    //[get] / news
    getNews(req,res,next) {
        const pageSize = 4
        var page = req.query.page;
        if(page) {
            page = parseInt(page)
            var skip = (page-1) * pageSize
            Post.find({})
                .skip(skip)
                .limit(pageSize)
                .then(posts => res.render('news', {
                    posts: manyMongooseToObject(posts),
                    account: req.data
                }))
                .catch(next);
        } else {
            Post.find({})
                .then(posts => res.render('news', {
                    posts: manyMongooseToObject(posts)
                }))
                .catch(next);
        }
    }

    //[get] / service
    getService(req,res,next) {
        var title = req.query.q;
        console.log(title)
        Worker.find({})
            .then(workers => res.render('service', {
                workers: manyMongooseToObject(workers),
                account: req.data
            }))
            .catch(next);
    }

    //[get] / about
    getAbout(req,res) {
        res.render('about')
    }

    //[get] / thanks
    getThanks(req,res) {
        res.render('thanks')
    }

}

module.exports = new SiteController