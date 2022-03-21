var Userdb = require('../model/model');
//create and save new user
exports.create = (req, res) => {
        //validate requests
        if (!req.body) {
            res.status(400).send({ message: "Content cannot be empty!" });
            return;
        }
        //new user
        const user = new Userdb({
                BandName: req.body.BandName,
                Genre: req.body.Genre,
                Country: req.body.Country,
                Status: req.body.Status
            })
            //save user
        user
            .save(user)
            .then(data => {
                //res.send(data)
                res.redirect('/add-user')
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured while creating a create operation"
                });
            });
    }
    //retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {
        if (req.query.id) {
            const id = req.query.id;
            Userdb.findById(id)
                .then(data => {
                    if (!data) {
                        res.status(404).send({ message: "Band with id " + id + " not found" })
                    } else {
                        res.send(data)
                    }
                })
                .catch(err => {
                    res.status(500).send({ message: "Error retrieving Band with id " + id })
                })
        } else {
            Userdb.find()
                .then(user => {
                    res.send(user)
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Error occured while retrieveing information" })
                })
        }
    }
    //Update a new identified user by user id
exports.update = (req, res) => {
        if (!req.body) {
            return res
                .status(400)
                .send({ message: "Data to update cannot be empty" })
        }
        const id = req.params.id;
        Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Cannot update band with " + id + ", maybe band not found" })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error while updating user information" })
            })
    }
    //Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Error while deleting data with id ' + id })
            } else {
                res.send({
                    message: "Band was deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete band with id " + id
            });
        });
}