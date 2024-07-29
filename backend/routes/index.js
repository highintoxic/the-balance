const routes = require("express").Router();
const ytDetails = require("./yt-details");
const histSData = require("./historical-stock-data");
routes.use("/yt-details", ytDetails);
routes.use("/historical-stock-data", histSData)
module.exports = routes