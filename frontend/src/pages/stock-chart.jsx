import { useState } from "react";
import Dashboard from "../components/chart-dashboard";

import StockContext from "../context/StockContext";
import BaseLayout from "../layouts/BaseLayout";

export default function StockChart() {
	const [stockSymbol, setStockSymbol] = useState("IBM");

	return (
		<StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
			<BaseLayout>
				<div className='my-20'>
					<Dashboard />
				</div>
			</BaseLayout>
		</StockContext.Provider>
	);
}
