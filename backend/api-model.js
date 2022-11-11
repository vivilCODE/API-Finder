const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    API: String,
    Description: String,
    Auth: String,
    HTTPS: Boolean,
    Cors: String,
    Link: String,
    Category: String,
    apiId: String,
    favorite: Boolean,
  });
  
  const Api = mongoose.model('Api', apiSchema);
  
  module.exports = Api;
  