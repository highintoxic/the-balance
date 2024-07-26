import { useState } from "react";
import Dashboard from "../components/chart-dashboard";

import StockContext from "../context/StockContext";

export default function StockChart() {
	const [stockSymbol, setStockSymbol] = useState("IBM");

	return (
		<StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
			<div className="">
				<Dashboard />
			</div>
		</StockContext.Provider>
	);
}


