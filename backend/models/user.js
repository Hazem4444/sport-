const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fName:String,
    lName:String,
    email:String,
    pwd:String,
    cpwd:String
})

const user = mongoose.model('user', userSchema);
module.exports = user ;