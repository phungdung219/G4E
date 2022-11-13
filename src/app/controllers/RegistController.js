const Account = require('../models/Account')
const bcrypt = require('bcrypt');
const saltRounds = 10;

class RegistController {
    //[get] / regist
    index(req, res) {
        res.render('regist',{layout:false})
    }
    signUp(req,res) {
        var username = req.body.username;
        var password = req.body.password;
        var fullname = req.body.fullname;
        var email = req.body.email;
        var number = req.body.number;
        var role = req.body.role;
        var encryptedPass = ''
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                encryptedPass = hash;

                Account.findOne({
                    username:username,
                    email: email
                })
                .then(data=>{
                    if(data){
                        res.json('user da ton tai')
                    }else{
                        return Account.create({
                            username:username,
                            password:encryptedPass,
                            fullname:fullname,
                            number:number,
                            email:email,
                            role:role
                        })
                    }
                })
                .then(data=>{
                    if(data){
                        res.redirect('/login')
                    }
                })
                .catch(err=>{
                    res.status(500).json("Tao tai khoan that bai")
                })
            });
        });
    }
}

module.exports = new RegistController