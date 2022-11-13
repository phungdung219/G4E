const express = require('express')
const handlebars  = require('express-handlebars')
const morgan = require('morgan')
const methodOverride = require('method-override')
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')
const multer = require('multer')

const path = require('path')
const app = express()
const port = 3000
const route = require('./routes')

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cookieParser())
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))
// Connect DB 
const db = require ('./config/db')
db.connect()

// Xac dinh tuyen duong
app.use(express.static(path.join(__dirname, 'public')))

// HTTP loger
app.use(morgan('combined'))

// Routes init
route(app)

// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs',
  helpers: {
    sum: (a,b) => a+b,
    ifCond: (v1,v2,options) => { if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);}
  },
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

//Tạo socket 
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

