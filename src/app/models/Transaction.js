const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Transaction = new Schema({
    account: { type: String},
    name: { type: String, default: 'hahaha' },
    helper: {type: String},
    note: {type: String},
    address: {type: String},
    price: {type: String},
    date: {type: String},
    time: {type: String},
    
  }, {
    timestamps: true
  });

  module.exports= mongoose.model('Transaction', Transaction);
  