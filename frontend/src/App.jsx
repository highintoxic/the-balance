import Card from "./components/card";

function App() {
	return (
		<div>
			<div className='flex justify-center items-center h-screen space-x-4 bg-primary'>
				<Card title='Budget Tracker' />
				<Card title='Live Stock Exchange' />
				<Card title='Financial Education' />
				<Card title='Currency Converter' />
			</div>
		</div>
	);
}

export default App;
