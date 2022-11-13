const jwt = require('jsonwebtoken')
const Account = require('../models/Account')
const { MongooseToObject } = require('../../util/mongoose')
var accountName
try {
    var token = req.cookies.token
    var idUser = jwt.verify(token,'mk')
    account = Account.findOne({_id:idUser})
    .then(data=>{
        if(data){
            account = MongooseToObject(data)
            return account
            
        } 
    })
} catch(error) {
}
export default accountName;