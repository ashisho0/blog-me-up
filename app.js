const express = require("express");
const app = express();
const config = require("./config/index");
const apiRoute = require("./controllers/api.route")();
const morgan = require('morgan');
const path = require('path');
require("./db")

const port = process.env.PORT || 9090;

const bodyParser = require('body-parser')

const cors = require("cors");

app.use(express.static(path.join(__dirname, 'public')));


// Third party middlewares
app.use(morgan('dev'));

app.use('/image', express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());



// Routes



app.use("/api", apiRoute);



// error handling Middleware
app.use(function (err, req, res, next) {
    res.status(err.status || 400)
    res.json({
        errmsg: err.msg || err,
        status: err.status || 400,
    })
})







app.listen(port, (err, done) => {
    if (err) {
        console.log("Problem loading server")
    }
    else {
        console.log(`Server listening at port ${port}`)
    }
})