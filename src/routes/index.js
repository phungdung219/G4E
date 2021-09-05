
const introduceRouter = require('./introduce')
const workersRouter = require('./workers')
const adminRouter = require('./admin')

const siteRouter = require('./site')

function route(app) {


    app.use('/introduce', introduceRouter)
    app.use('/admin', adminRouter)
    app.use('/workers', workersRouter)

    app.use('/', siteRouter)

   
}

module.exports = route
