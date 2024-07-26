import { useState } from "react";
import Dashboard from "../components/chart-dashboard";

import StockContext from "../context/StockContext";

export default function StockChart() {
	const [stockSymbol, setStockSymbol] = useState("IBM");

	return (
		<StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
			<div className="mt-20">
				<Dashboard />
			</div>
		</StockContext.Provider>
	);
}


