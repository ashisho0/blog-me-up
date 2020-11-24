const userQuery = require("./user.query");
const fs = require("fs");
const path = require("path");


//insert

function insert(req, res, next) {
    let data = req.body;
    if (req.file) {
        data.image = req.file.filename;

        let mimeType = req.file.mimetype.split("/")[0];

        if (mimeType != "image") {
            fs.unlink(path.join(process.cwd(), "uploads/" + req.file.filename), function (err, done) {
                if (err) {
                    console.log("Error removing")
                } else {
                    console.log("Removed")
                }
            })
            return next({
                msg: "Invalid File Format"
            })
        }
    }

    userQuery.insert(data)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err);
        })
}


//findAll
function find(req, res, next) {
    // console.log("LOGGEDINUSER______>", req.loggedInUser)
    userQuery.fetch({})
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}

//findByID

function findByID(req, res, next) {
    userQuery.fetchOne({ _id: req.params.id })
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}

//update
function update(req, res, next) {
    if (req.file) {
        req.body.image = req.file.filename;
    }
    userQuery.update(req.params.id, req.body)
        .then(function (data) {
            if (req.file) {
                fs.unlink(path.join(process.cwd(), "upload/" + data.oldImage), function (err, done) {
                    if (err) {
                        console.log("Error removing")
                    }
                    else {
                        console.log("Removed")
                    }
                })
            }
            res.json(data.data)
        })

        .catch(function (err) {
            next(err)
        })
}

//delete
function remove(req, res, next) {
    userQuery.remove(req.params.id)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            next(err);
        })
}

module.exports = {
    insert,
    find,
    findByID,
    update,
    remove
}