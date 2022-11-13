const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Worker = new Schema({
    name: { type: String, default: 'hahaha' },
    birth: { type: String},
    from: { type: String},
    experience: { type: String },
    img: {type: String},
    salary: {type: String},
    slug: { type: String, slug: 'name', unique:true }
  }, {
    timestamps: true
  });

  module.exports= mongoose.model('Worker', Worker);