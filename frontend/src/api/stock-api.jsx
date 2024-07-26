import axios from "axios";
import { formateDate } from "../helpers/data-helper";
const basePath = "https://finnhub.io/api/v1";

export const searchSymbol = async (query) => {
	const url = `${basePath}/search?q=${query}&token=cq7picpr01qormuindp0cq7picpr01qormuindpg`;
	const response = await fetch(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};


export const fetchStockDetails = async (stockSymbol) => {
	const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=cq7picpr01qormuindp0cq7picpr01qormuindpg`;
	const response = await fetch(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};


export const fetchQuote = async (stockSymbol) => {
	const url = `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=cq7picpr01qormuindp0cq7picpr01qormuindpg`;
	const response = await fetch(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

export const fetchHistoricalData = async (
	stockSymbol,
	resolution,
	from,
	to
) => {
	let func =
		resolution === "1D"
			? "TIME_SERIES_INTRADAY"
			: resolution === "1W"
			? "TIME_SERIES_DAILY"
			: resolution === "1M"
			? "TIME_SERIES_WEEKLY"
			: "TIME_SERIES_MONTHLY";
	let series =
		resolution === "1D"
			? "Time Series (30min)"
			: resolution === "1W"
			? "Time Series (Daily)"
			: resolution === "1M"
			? "Weekly Time Series"
			: "Monthly Time Series";
	const url = new URL(
		"https://www.alphavantage.co/query"
	);
    url.searchParams.append("function", func)
    url.searchParams.append("symbol", stockSymbol)
    if(resolution === "1D") url.searchParams.append("interval", "30min")
    url.searchParams.append("apikey", "1F10ONCR6UBXNF7W");

	const { data } = await axios.get(url);
	console.log(await axios.get(url));
	const response = data
	let resObj = {
		c: [],
		t: [],
	};
	let dts = Object.keys(response[series]).filter((x) => {
		return Date.parse(x) / 1000 >= from && Date.parse(x) / 1000 <= to;
	});

	const desc = Object.getOwnPropertyDescriptors(response[series]);
	for (const x of dts) {
		resObj.t.push(Date.parse(x) / 1000);
		resObj.c.push(parseInt(desc[x].value["4. close"]));
	}
	console.log(resObj, formateDate(from * 1000), formateDate(to * 1000));

	return resObj;
};
