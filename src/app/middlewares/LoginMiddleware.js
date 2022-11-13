const jwt = require('jsonwebtoken')
const Account = require('../models/Account')
const { MongooseToObject } = require('../../util/mongoose')
class LoginMiddleware {

    checkLogin(req,res,next){
        try {
            var token = req.cookies.token
            var idUser = jwt.verify(token,'mk')
            Account.findOne({_id:idUser})
            .then(data=>{
                if(data){
                    req.data= MongooseToObject(data)
                    next()
                } else {
                    res.render('right',{layout:false})
                }
            })
        } catch(error) {
            return res.redirect('/login')
        }
    }

    checkAdmin(req,res,next) {
        if(req.data.role==='admin') {
            next()
        } else{
            res.render('right',{layout:false})
        }
    }
    
}

module.exports = new LoginMiddleware

