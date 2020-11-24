const jwt = require("jsonwebtoken");
const config = require("../config");
const userModel = require("../components/users/user.model")

module.exports = function (req, res, next) {
    let token;

    if (req.headers["x-access-token"]) {
        token = req.headers["x-access-token"]
    }
    else if (req.query.token) {
        token = req.query.token
    }

    if (!token) {
        return next({
            msg: "Token Not Provided"
        })
    }

    jwt.verify(token, config.jwtSecret, function (err, decoded) {
        if (err) {
            return next(err);
        }

        userModel.findOne({ _id: decoded.id })
            .exec(function (err, user) {
                if (err) {
                    return next(err)
                }
                if (user) {
                    req.loggedInUser = decoded;

                    return next();
                }
                else {
                    next({
                        msg: "User Removed"
                    })
                }
            })
    })
}