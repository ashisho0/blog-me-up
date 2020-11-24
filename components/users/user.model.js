const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    //     1 = Super admin      2= Author admin     3= Normal user
    role: {
        type: Number,
        enum: [1, 2, 3],
        default: 2

    },

    image: {
        type: String
    },

    addedBy: {
        type: String
    }

},

    {
        timestamps: true
    }
)

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;