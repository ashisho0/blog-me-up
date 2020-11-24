const express = require("express");
const router = express.Router();

const authRoute = require("../components/auth/auth.route");
const articleRoute = require("../components/articles/article.route")
const userRoute = require("../components/users/user.route")

const authenticate = require("../middlewares/authenticate");
const authorizeAdmin = require("../middlewares/authorize-admin");


module.exports = function () {

    router.use("/auth", authRoute);

    router.use("/article", articleRoute);

    router.use("/user", authenticate, authorizeAdmin, userRoute);

    return router;
}
