const Account = require('../models/Account')
const Worker = require('../models/Worker')
const Transaction = require('../models/Transaction')
const { manyMongooseToObject } = require('../../util/mongoose');
const { MongooseToObject } = require('../../util/mongoose')

const jwt = require('jsonwebtoken')
class UserController {

    //[get] /Users/:slug
    getCheckout(req,res,next) {
        Worker.findOne({slug:req.params.slug})
        .then((worker)=>{
            res.render('user/checkout', {
                worker: MongooseToObject(worker),
                account: req.data
            })
        }) 
        .catch(next)
    }

    //[POST] / user/checkout/:slug
    getPay(req,res,next) { 
        Worker.findOne({slug:req.params.slug})
        .then((worker)=>{
            const transaction = new Transaction( req.body );
            transaction.account = req.data.username
            transaction.helper = MongooseToObject(worker).name
            transaction.price = MongooseToObject(worker).salary
            console.log(transaction)
            transaction.save()
            res.redirect('/thanks')
        }) 
        .catch(next)
    }

    //[GET] / user/info
    getInfo(req,res,next) {
        try {
            var token = req.cookies.token
            var idUser = jwt.verify(token,'mk')
            Account.findOne({_id:idUser})
            .then(data=>{
                res.render('user/info',{
                    account: MongooseToObject(data),
                    href: req.url
                })
            })
        } catch(error) {
            
        }
    }
    
    getTrans(req,res,next) {
        if(req.data.role==='admin') {
            Transaction.find({})
            .then((data)=>{
                res.render('user/transactions', {
                    trans: manyMongooseToObject(data),
                    account: req.data,
                    href: req.url
                })
            }) 
            .catch(next)
        } else {

            Transaction.find({account:req.data.username})
            .then((data)=>{
                res.render('user/transactions', {
                    trans: manyMongooseToObject(data),
                    account: req.data,
                    href: req.url
                })
            }) 
            .catch(next)
        }
    }
}

module.exports = new UserController