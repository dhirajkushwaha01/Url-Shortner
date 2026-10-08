
const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);
module.exports = router;

router.get("/logout", (req, res) => {
    return res.clearCookie("token").redirect("/");
})