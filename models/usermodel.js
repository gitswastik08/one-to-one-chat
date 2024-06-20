let mongoose = require("mongoose");
var plm = require("passport-local-mongoose");
let userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  
});

userSchema.plugin(plm);
let kuchbhinaam = mongoose.model("user", userSchema);

module.exports = kuchbhinaam;
