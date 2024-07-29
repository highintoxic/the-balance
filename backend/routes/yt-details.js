const ytsr = require("@distube/ytsr");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {

	const { link } = req.body;
    try{

        const { items } = await ytsr(new URL(link).searchParams.get("v"), {
            limit: 1,
        });
        res.send({
            channelName: items[0].author.name,
            videoTitle: items[0].title || items[0].name,
            videoDesc: items[0].description || "No Description",
            videoLink: items[0].url,
            videoThumb: items[0].thumbnails[0].url,
        });
        res.status(200);
    } catch(err) {
        next(err)
    }

});

module.exports = router;
