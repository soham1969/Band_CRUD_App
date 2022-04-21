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

// sudo service mongodb start // for starting mongoDB service

//https://docs.docker.com/engine/install/linux-postinstall/

//sudo nano /var/lib/dpkg/statoverride for editing system files save with control +o then enter and then control +x
//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 new github link