class IntroduceController {

    //[get] / introduce
    index(req, res) {
        res.render('introduce');
    }

    show(req,res) {
        res.send('Tin Tuc Chi tiet')
    }

}

module.exports = new IntroduceController