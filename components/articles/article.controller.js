const articleQuery = require("./article.query");
const fs = require("fs");
const path = require("path");


// Add Article 

function insert(req, res, next) {
    let data = req.body;
    data.author = req.loggedInUser.name


    if (req.file) {
        data.image = req.file.filename;

        let mimeType = req.file.mimetype.split("/")[0]

        if (mimeType != "image") {
            fs.unlink(path.join(process.cwd(), "uploads/" + req.file.filename), function (err, done) {
                if (err) {
                    console.log("Error removing")
                }
                else {
                    console.log("Removed")
                }
            })
            return next({
                msg: "Invalid File Format"
            })
        }
    }

    articleQuery.insert(data)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            next(err);
        });
}


// Find All Article

function find(req, res, next) {
    console.log("req.loggedinuser--->", req.loggedInUser)

    if (req.loggedInUser) {
        if (req.loggedInUser.role === 1) {
            articleQuery.fetch({})
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    next(err);
                })
        }
        else if (req.loggedInUser.role === 2) {
            articleQuery.fetch({ author: req.loggedInUser.id })
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    next(err);
                })
        }
    }
    else {
        articleQuery.fetch({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                next(err);
            })

    }

}


// FindOne

function findById(req, res, next) {

    articleQuery.fetchOne({ _id: req.params.id })
        .then(function (data) {
            if (req.loggedInUser.role === 1 || data.author === loggedInUser.id) {
                res.json(data);
            }
        })
        .catch(function (err) {
            next({
                msg: "Access Denied",
                status: 403
            });
        })
}


// edit

function update(req, res, next) {

    if (req.file) {
        req.body.image = req.file.filename;
    }
    articleQuery.update(req.params.id, req.body)
        .then(function (data) {
            if (req.loggedInUser.role === 1 || data.author === loggedInUser.id) {
                if (req.file) {

                    fs.unlink(path.join(process.cwd(), "uploads/" + data.oldImage), function (err, done) {
                        if (err) {
                            console.log("Error removing")
                        }
                        else {
                            console.log("Removed")
                        }
                    })
                }
                res.json(data.data);
            }
        })

        .catch(function (err) {
            next({
                msg: "Access Denied",
                status: 403
            });
        })
}


// delete

function remove(req, res, next) {
    articleQuery.remove(req.params.id)
        .then(function (data) {
            if (req.loggedInUser.role === 1 || data.author === loggedInUser.id) {

                res.json(data);
            }
        })
        .catch(function (err) {
            next({
                msg: "Access Denied",
                status: 403
            });
        })
}



module.exports = {
    insert,
    find,
    findById,
    update,
    remove,
}