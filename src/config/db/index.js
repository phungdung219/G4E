const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/GV4E', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true                  
        });
        console.log ('connect')
    } catch (error) {
        console.log ('not connect')
    }
}

module.exports = { connect }