const UserModel = require("../users/user.model")

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const config = require("../../config")

function login(req, res, next) {
    UserModel.findOne({ email: req.body.email })
        .exec(function (err, user) {
            if (err) {
                return next(err)
            }
            if (user) {

                let hashedPassword = user.password;
                let instertedPassword = req.body.password;

                bcrypt.compare(instertedPassword, hashedPassword, function (err, isMatched) {
                    if (err) {
                        return next(err)
                    }
                    if (!isMatched) {
                        return next({ msg: "Invalid Password" })
                    }
                    let token = jwt.sign({ id: user._id, name: user.name,  role: user.role }, config.jwtSecret);
                    res.json({
                        user,
                        token
                    })


                })
            } else {
                next({
                    msg: "Invalid email"
                })
            }
        })
}



function register(req, res, next) {
    const newUser = new UserModel({});

    console.log("Request Data==>", req.body)
    newUser.name = req.body.name;
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.phone = req.body.phone;
    newUser.password = req.body.password;
    newUser.role = req.body.role;

    console.log("New User--->", newUser);

    bcrypt.hash(newUser.password, saltRounds, function (err, hashedPassword) {
        newUser.password = hashedPassword;
        console.log("Hashed Password-->", newUser);
        console.log("req.body.Password-->", req.body.password);



        newUser.save(function (err, done) {
            if (err) {
                return next(err);
            }
            res.status(200).json(done);
        })

    });
}


module.exports = {
    login,
    register
}