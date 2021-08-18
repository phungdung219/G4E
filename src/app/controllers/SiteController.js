class SiteController {

    //[get] / 
    index(req, res) {
        res.render('home');
    }

    //[get] / news
    getNews(req,res) {
        res.render('news')
    }

}

module.exports = new SiteController