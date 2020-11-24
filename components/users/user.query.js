const UserModel = require("./user.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

function map_user_req(user, userDetail) {
    if (userDetail.name) {
        user.name = userDetail.name
    }
    if (userDetail.username) {
        user.username = userDetail.username
    }
    if (userDetail.email) {
        user.email = userDetail.email
    }
    if (userDetail.phone) {
        user.phone = userDetail.phone
    }
    if (userDetail.password) {
        user.password = userDetail.password
    }
    if (userDetail.role) {
        user.role = userDetail.role
    }
    if (userDetail.image) {
        user.image = userDetail.image
    }

    return user;
}

//Insert
function insert(reqData) {
    return new Promise(function (resolve, reject) {
        let newUser = new UserModel;

        let mappedUser = map_user_req(newUser, reqData); //mapped user is now the obj with form data
        bcrypt.hash(mappedUser.password, saltRounds, function (err, hashedPassword) {
            if (err) {
                return reject(err)
            }
            mappedUser.password = hashedPassword;
            mappedUser.save(function (err, done) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(done);
                }
            })
        })
    })
}


//fetch
function fetch(condition) {
    return new Promise(function (resolve, reject) {
        UserModel.find(condition)
            .exec(function (err, user) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(user)
                }
            })
    })
}

function fetchOne(condition) {
    return new Promise(function (resolve, reject) {
        UserModel.findOne(condition)
            .exec(function (err, user) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(user)
                }
            })
    })
}

/**
 * 
 * @param {string} id 
 * @param {object} updatedData 
 * @returns promise
 */

//update
function update(id, updatedData) {
    return new Promise(function (resolve, reject) {
        UserModel.findById(id)
            .exec(function (err, user) {
                if (err) {
                    reject(err)
                }
                if (user) {
                    let oldImage = user.image;
                    let updatedUser = map_user_req(user, updatedData);
                    updatedUser.save(function (err, data) {
                        if (err) {
                            reject(err)
                        }
                        else {
                            resolve({ data, oldImage })
                        }
                    })

                }
                else {
                    resolve(user)
                }

            })
    })
}


//Remove
function remove(id) {
    return new Promise(function (resolve, reject) {
        UserModel.findByIdAndRemove(id)
            .exec(function (err, removed) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(removed)
                }
            })
    })
}


module.exports = {
    insert,
    fetch,
    update,
    remove,
    fetchOne
}