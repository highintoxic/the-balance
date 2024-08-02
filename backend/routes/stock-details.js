const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
	const { stocksymbol } = req.body;
    const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${stocksymbol}&token=${process.env.FINN_API_KEY}`;
    const response = await fetch(url);


    res.send(await response.json());
});

module.exports = router