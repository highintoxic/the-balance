import { useState, useEffect } from "react";
import CurrencyCodes from "./currency-codes.json";
import Dropdown from "../components/dropdown";
import axios from "axios";
import BaseLayout from "../layouts/BaseLayout";

export default function CurrencyConverter() {
	const [amount, setAmount] = useState(100);
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("INR");
	const [exchangeRate, setExchangeRate] = useState({});
	const [result, setResult] = useState(0);
	useEffect(() => {
		axios({
			method: "get",
			baseURL: "https://api.freecurrencyapi.com/v1/latest",
			responseType: "json",
			params: {
				apikey: import.meta.env.VITE_API_KEY,
				base_currency: fromCurrency.toUpperCase(),
			},
		})
			.then((response) => {
				setExchangeRate(response.data.data);
			})
			.catch((e) => console.log(e));
	}, [fromCurrency]);

	const convertCurrency = () => {
		const fromExchangeRate = exchangeRate[fromCurrency];
		const toExchangeRate = exchangeRate[toCurrency];
		const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
		setResult(
			`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
		);
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handleFromCurrencyChange = (e) => {
		setFromCurrency(e);
	};

	const handleToCurrencyChange = (e) => {
		setToCurrency(e);
	};

	return (
		<BaseLayout>
			<div className='w-11/12 max-w-xs bg-secondary absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 p-8 rounded-lg shadow-md'>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl font-bold uppercase mb-4'>
						Currency Converter
					</h1>
				</div>
				<label htmlFor='amount' className='block font-semibold'>
					Amount:
				</label>
				<input
					type='number'
					id='amount'
					value={amount}
					onChange={handleAmountChange}
					className='font-normal text-xl block w-full border-b-2 border-black text-gray-600 mb-8 p-2 focus:text-purple-500 focus:border-purple-500'
				/>
				<div className='flex gap-4 flex-row *:basis-1/2'>
					<Dropdown
						items={CurrencyCodes}
						title='From'
						onSelectOption={handleFromCurrencyChange}
					/>
					<Dropdown
						items={CurrencyCodes}
						title='To'
						onSelectOption={handleToCurrencyChange}
					/>
				</div>
				<button
					id='convert-button'
					onClick={convertCurrency}
					className='text-base w-full bg-blue py-2 mt-8 rounded-md text-white font-semibold'
				>
					Convert
				</button>
				{result ? (
					<p
						id='result'
						className='text-xl text-center mt-4 text-black bg-blue bg-opacity-70 py-3'
					>
						{result}
					</p>
				) : (
					<p></p>
				)}
			</div>
		</BaseLayout>
	);
}
