const routes = require("express").Router();
const ytDetails = require("./yt-details");

routes.use("/yt-details", ytDetails);

module.exports = routes