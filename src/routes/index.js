
const loginRouter = require('./login')
const registRouter = require('./regist')
const introduceRouter = require('./introduce')
const workersRouter = require('./workers')
const adminRouter = require('./admin')
const userRouter = require('./user')

const siteRouter = require('./site')

function route(app) {

    app.use('/login', loginRouter)
    app.use('/regist', registRouter)
    app.use('/introduce', introduceRouter)
    app.use('/admin',adminRouter)
    app.use('/workers', workersRouter)
    app.use('/user', userRouter)
    
    app.use('/', siteRouter)

   
}

module.exports = route
