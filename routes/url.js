const express = require("express");

const {
    handleGenerateNewShortURL,
    handleGetAnalytics,
} = require("../controllers/url");

const { checkForAuthentication } = require("../middlewares/auth");

const router = express.Router();

router.post("/", checkForAuthentication, handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;