const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    BandName: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    Status: String
})
const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;