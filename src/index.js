const express = require('express')
const handlebars  = require('express-handlebars')
const morgan = require('morgan')
const methodOverride = require('method-override')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes')


app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))
// Connect DB 
const db = require ('./config/db')
db.connect()

// Xac dinh tuyen duong
app.use(express.static(path.join(__dirname, 'public')))

// HTTP loger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs',
  helpers: {
    sum: (a,b) => a+b
  }
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

// Routes init
route(app)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})