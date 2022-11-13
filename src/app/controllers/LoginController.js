const Account = require('../models/Account')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;
let alert = require('alert'); 



class LoginController {

    //[get] / login
    index(req, res) {
        res.render('login',{layout:false})
    }

    //[POST] / login
    signIn(req,res,next) {
        
        Account.findOne({
            username: req.body.username,
            
        })
        .then(data=>{
            if(bcrypt.compare(req.body.password, data.password)){
                var token = jwt.sign({_id: data._id},'mk')
                res.cookie('token',token).redirect('/')
            }else{
                res.render('login');
            }
        })
        .catch(err=>{
            res.render('login');
        })
    }
}

module.exports = new LoginController