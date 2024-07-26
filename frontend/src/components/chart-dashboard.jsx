import { Component } from "react";
import Overview from "./overview";
import Details from "./details";
import Chart from "./chart";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../api/stock-api";
import Search from "./search";

class Dashboard extends Component {
	static contextType = StockContext;

	constructor(props) {
		super(props);
		this.state = {
			stockDetails: {},
			quote: {},
			stockSymbol: "",
		};
	}

	componentDidMount() {
		this.setState({ stockSymbol: this.context.stockSymbol });
		this.updateStockDetails();
		this.updateStockOverview();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.context.stockSymbol !== prevState.stockSymbol) {
			this.updateStockDetails();
			this.updateStockOverview();
		}
	}

	updateStockDetails = async () => {
		try {
			const result = await fetchStockDetails(this.context.stockSymbol);
			this.setState({ stockDetails: result });
		} catch (error) {
			this.setState({ stockDetails: {} });
			console.log(error);
		}
	};

	updateStockOverview = async () => {
		try {
			const result = await fetchQuote(this.context.stockSymbol);
			this.setState({ quote: result });
		} catch (error) {
			this.setState({ quote: {} });
			console.log(error);
		}
	};

	render() {
		const { stockSymbol } = this.context;
		const { stockDetails, quote } = this.state;

		return (
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 px-10 pt-5 font-quicksand bg-neutral-100'>
				<div className='md:col-span-2 row-span-5'>
					<Chart />
				</div>
				<div className="flex justify-center items-center">
					<Search />
				</div>
				<div>
					<Overview
						symbol={stockSymbol}
						price={quote.pc}
						change={quote.d}
						changePercent={quote.dp}
						currency={stockDetails.currency}
					/>
				</div>
				<div className='row-span-2 xl:row-span-3'>
					<Details details={stockDetails} />
				</div>
			</div>
		);
	}
}

export default Dashboard;
