const Account = require('../models/Account')
const jwt = require('jsonwebtoken')


class LoginController {

    //[get] / login
    index(req, res) {
        res.render('login',{layout:false})
    }

    //[POST] / login
    signIn(req,res,next) {
        Account.findOne({
            username: req.body.username,
            password: req.body.password
        })
        .then(data=>{
            if(data){
                var token = jwt.sign({_id: data._id},'mk')
                res.cookie('token',token).redirect('/')
                
            }else{
                res.json('fail')
            }
        })
        .catch(err=>{
            res.status(500).json('lỗi server')
        })
    }
}

module.exports = new LoginController