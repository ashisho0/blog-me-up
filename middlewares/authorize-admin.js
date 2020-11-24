module.exports = function (req, res, next) {
    console.log("req.loggedInUser.role----->", req.loggedInUser.role)
    if (req.loggedInUser.role === 1) {
        return next();
    }
    else {
        next({
            msg: "You Dont Have Access"
        })
    }
}

