module.exports = function (req, res, next) {
    if (req.loggedInUser.role == 2 ) {
        return next();
    }
    else {
        next({
            msg: "You Dont Have Access"
        })
    }
}