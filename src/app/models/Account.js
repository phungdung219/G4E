const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Account = new Schema({
    username: { type: String },
    password: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  }, {
    collection:'account'
  });

  module.exports= mongoose.model('Account', Account);