const axios = require('axios');
exports.homeRoutes = (req, res) => {
    //Make a GET request to API/users
    axios.get('http://localhost:3000/api/myFirstDatabase')
        .then(function(response) {
            console.log(response.data);
            res.render('index', { myFirstDatabase: response.data });
        })
        .catch(err => {
            res.send(err)
        })
}
exports.add_user = (req, res) => {
    res.render('add_user');
}
exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/myFirstDatabase', { params: { id: req.query.id } })
        .then(function(userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}