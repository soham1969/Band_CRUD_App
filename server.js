const express = require('express'); // for using the express 
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection');
const app = express(); //app variable is initialized as an express application
dotenv.config({ path: 'config.env' }) //makes the server run on port specified in config.env file
const PORT = process.env.PORT || 8080 //makes the server run on port 8080 by default unless path configuration is specified like the above line
app.use(morgan('tiny')); //log requests
//morgan(':method :url :status :res[content-length] - :response-time ms');
//mongoDB connection
connectDB();
//parse request to body-parser in express only does the job
app.use(express.urlencoded());
//set view engine
app.set("view engine", "ejs");
//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
//load routers
app.use('/',
    require('./server/routes/router'))
app.listen(PORT, () => { console.log('server is running on http://localhost:' + PORT) });