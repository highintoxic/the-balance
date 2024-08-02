const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
	const { search } = req.body;
	const url = `https://finnhub.io/api/v1/search?q=${search}&token=${process.env.FINN_API_KEY}`;

	const response = await fetch(url);
	res.send(await response.json());
});

module.exports = router;