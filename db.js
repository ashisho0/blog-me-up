const mongoose = require("mongoose");
const { conxnURL, dbName } = require("./config/db.config");

mongoose.connect("mongodb+srv://ashish2052:H3!lb0y1@blogmeup.bq2ad.mongodb.net/articles?retryWrites=true&w=majority", { useNewUrlParser: true },
    (err, done) => {
        if (err) {
            console.log("Database connecttion failed");
        } else {
            console.log("Database connection successfull")
        }
    })

