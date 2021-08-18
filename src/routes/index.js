
const introduceRouter = require('./introduce')

const siteRouter = require('./site')

function route(app) {


    app.use('/introduce', introduceRouter)

    app.use('/', siteRouter)

   
}

module.exports = route
