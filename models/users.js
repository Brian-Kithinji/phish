const mongoose = require("mongoose");

const schema = mongoose.Schema({
  url:String,
  username:String,
  password:String
});

module.exports = mongoose.model(
"users",schema);
