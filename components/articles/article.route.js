const router = require("express").Router();
const articleCtrl = require("./article.controller");

const multer = require("multer");
const authenticate = require("../../middlewares/authenticate");

let myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

let upload = multer({ storage: myStorage })


router.get("/", articleCtrl.find)

router.post("/add", authenticate, upload.single("image"), articleCtrl.insert)

router.get("/:id", articleCtrl.findById)

router.put("/edit/:id", authenticate, upload.single("image"), articleCtrl.update)

router.delete("/:id", authenticate, articleCtrl.remove)


module.exports = router