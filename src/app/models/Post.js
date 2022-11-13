const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Post = new Schema({
    title: { type: String, default: 'hahaha' },
    desc: { type: String},
    img: { type: String},
    link: { type: String },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    slug: { type: String, slug: 'name', unique:true }
  }, {
    timestamps: true
  });

  module.exports= mongoose.model('Post', Post);