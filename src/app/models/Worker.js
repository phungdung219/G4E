const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Worker = new Schema({
    name: { type: String, default: 'hahaha' },
    birth: { type: String},
    from: { type: String},
    experience: { type: String },
    img: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

  module.exports= mongoose.model('Worker', Worker);