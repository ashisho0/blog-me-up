const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

    title: {
        required: true,
        type: String,
        unique: true
    },

    description: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    author: {
        type: String
    },

    image: {
        type: String,
        required: true,
    },

    isPublished: {
        type: Boolean,
        default: false
    },


},

    {
        timestamps: true
    }
)

const ArticleModel = mongoose.model("article", ArticleSchema);
module.exports = ArticleModel;