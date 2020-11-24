const router = require("express").Router();
const userCtrl = require("./user.controller");
const authorizeAdmin = require("../../middlewares/authorize-admin")

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

router.post("/add", upload.single("image"), userCtrl.insert);

router.get("/:id", userCtrl.findByID)

router.put("/edit/:id", upload.single("image"), userCtrl.update)

router.delete("/:id", userCtrl.remove)


module.exports = router;