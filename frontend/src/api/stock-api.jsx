import axios from "axios";
const basePath = "https://finnhub.io/api/v1";
const finnKey = import.meta.env.VITE_FINN_API;
export const searchSymbol = async (query) => {
	const url = `${basePath}/search?q=${query}&token=${finnKey}`;
	const response = await fetch(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
	const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${finnKey}`;
	const response = await fetch(url);

	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
	const url = `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${finnKey}`;
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
	const response = await axios({
		method: "post",
		url: `${import.meta.env.VITE_API_BASE}/api/historical-stock-data/`,
		data: {
			stocksymbol: stockSymbol,
			resolution,
			from,
			to,
		},
	});
	return response.data;
};
