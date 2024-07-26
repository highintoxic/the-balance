import { Component } from "react";
import ChartFilter from "./chartfilter";
import Card from "./stock-card";
import {
	Area,
	XAxis,
	YAxis,
	ResponsiveContainer,
	AreaChart,
	Tooltip,
} from "recharts";

import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../api/stock-api";
import {
	createDate,
	convertDateToUnixTimestamp,
	convertUnixTimestampToDate,
} from "../helpers/data-helper";
import { chartConfig } from "../constants/config";

class Chart extends Component {

	static contextType = StockContext

	constructor(props) {
		super(props);
		this.state = {
			filter: "1W",
			data: [],
			stockSymbol: ""
		};
	}

	componentDidMount() {
		this.setState({ stockSymbol: this.context.stockSymbol})
		this.updateChartData();
	}

	componentDidUpdate(prevProps, prevState ) {
		if (
			prevState.filter !== this.state.filter ||
			prevState.stockSymbol !== this.state.stockSymbol
		) {
			this.updateChartData();
		}
	}

	formatData = (data) => {
		return data.c.map((item, index) => {
			return {
				value: item.toFixed(2),
				date: convertUnixTimestampToDate(data.t[index]),
			};
		});
	};

	getDateRange = () => {
		const { filter } = this.state;
		const { days, weeks, months, years } = chartConfig[filter];
		const endDate = new Date();
		const startDate = createDate(endDate, -days, -weeks, -months, -years);
		const startTimestampUnix = convertDateToUnixTimestamp(startDate);
		const endTimestampUnix = convertDateToUnixTimestamp(endDate);
		return { startTimestampUnix, endTimestampUnix };
	};

	updateChartData = async () => {
		const { stockSymbol } = this.context;
		const { filter } = this.state;
		try {
			const { startTimestampUnix, endTimestampUnix } = this.getDateRange();
			const resolution = filter;
			const result = await fetchHistoricalData(
				stockSymbol,
				resolution,
				startTimestampUnix,
				endTimestampUnix
			);
			this.setState({ data: this.formatData(result) });
		} catch (error) {
			this.setState({ data: [] });
			console.error("Error fetching historical data:", error);
		}
	};

	setFilter = (filter) => {
		this.setState({ filter });
	};

	render() {
		
		const { data, filter } = this.state;
		return (
			<Card>
				<ul className='flex absolute top-2 right-2 z-40'>
					{Object.keys(chartConfig).map((item) => (
						<li key={item}>
							<ChartFilter
								text={item}
								active={filter === item}
								onClick={() => this.setFilter(item)}
							/>
						</li>
					))}
				</ul>
				<ResponsiveContainer>
					<AreaChart data={data}>
						<defs>
							<linearGradient id='chartColor' x1='0' y1='0' x2='0' y2='1'>
								<stop
									offset='5%'
									stopColor={"rgb(199 210 254)"}
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor={"rgb(199 210 254)"}
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<Tooltip
							contentStyle={null}
							itemStyle={null}
						/>
						<Area
							type='monotone'
							dataKey='value'
							stroke='#312e81'
							fill='url(#chartColor)'
							fillOpacity={1}
							strokeWidth={0.5}
						/>
						<XAxis dataKey='date' />
						<YAxis domain={["dataMin", "dataMax"]} />
					</AreaChart>
				</ResponsiveContainer>
			</Card>
		);
	}
}



export default Chart;
