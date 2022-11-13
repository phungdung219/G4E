class IntroduceController {

    //[get] / introduce
    index(req, res) {
        res.render('introduce', {
            account:req.data
        });
    }

    show(req,res) {
        res.send('Tin Tuc Chi tiet')
    }

}

module.exports = new IntroduceController