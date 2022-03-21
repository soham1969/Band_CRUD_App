const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Route Route
 *@method GET / 
 */
route.get('/', services.homeRoutes);
/**
 * @description add users
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);
/**
 * @description update users
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);
//API
route.post('/api/myFirstDatabase', controller.create);
route.get('/api/myFirstDatabase', controller.find);
route.put('/api/myFirstDatabase/:id', controller.update);
route.delete('/api/myFirstDatabase/:id', controller.delete);
module.exports = route //this line allows the use of route in other js files