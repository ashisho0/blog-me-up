const router = require("express").Router();
const userCtrl = require("./user.controller");
const authorizeAdmin = require("../../middlewares/authorize-admin")
const authenticate = require("../../middlewares/authenticate");


const multer = require("multer");

let myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
})
let upload = multer({ storage: myStorage })


router.get("/", userCtrl.find);

router.post("/add", authenticate, authorizeAdmin, upload.single("image"), userCtrl.insert);

router.get("/:id", userCtrl.findByID)

router.put("/edit/:id", authenticate, authorizeAdmin, upload.single("image"), userCtrl.update)

router.delete("/:id", authenticate, authorizeAdmin, userCtrl.remove)


module.exports = router;