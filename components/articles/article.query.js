const ArticleModel = require("./article.model");

// Map function 
function map_article_req(article, dataFromForm) {
    if (dataFromForm.title) {
        article.title = dataFromForm.title
    }
    if (dataFromForm.description) {
        article.description = dataFromForm.description
    }
    if (dataFromForm.content) {
        article.content = dataFromForm.content
    }
    if (dataFromForm.image) {
        article.image = dataFromForm.image
    }
    if (dataFromForm.author) {
        article.author = dataFromForm.author
    }

    return article;
}


// Insert
function insert(reqData) {
    return new Promise(function (resolve, reject) {
        let newArticle = new ArticleModel({});

        let mappedArticle = map_article_req(newArticle, reqData);
        console.log("MappedArticcle is--->", mappedArticle)

        mappedArticle.save(function (err, done) {
            if (err) {
                reject(err);
            }
            else {
                resolve(done);
            }
        })
    })
}


// Fetch 
function fetch(condition) {
    return new Promise(function (resolve, reject) {
        ArticleModel.find(condition)
            .exec(function (err, articles) {
                if (err) {
                    reject(err);
                } else {
                    resolve(articles);
                }
            })
    })
}

function fetchOne(condition) {
    return new Promise(function (resolve, reject) {
        ArticleModel.findOne(condition)
            .exec(function (err, articles) {
                if (err) {
                    reject(err);
                } else {
                    resolve(articles);
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

//  Update
function update(id, updatedData) {
    return new Promise(function (resolve, reject) {
        ArticleModel.findById(id)
            .exec(function (err, article) {
                if (err) {
                    reject(err)
                }
                if (article) {
                    let oldImage = article.image;
                    let updatedArticle = map_article_req(article, updatedData)
                    updatedArticle.save(function (err, data) {
                        if (err) {
                            reject(err)
                        }
                        resolve({
                            data,
                            oldImage
                        })

                    })
                }
                else {
                    resolve(article)
                }
            })
    })
}


// Remove
function remove(id) {
    return new Promise(function (resolve, reject) {
        ArticleModel.findByIdAndRemove(id)
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