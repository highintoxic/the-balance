import Home from './pages/home'
import { Route, Routes } from 'react-router-dom';
import Budget from './pages/budget-calculator';
import CurrencyConverter from './pages/currency-converter';
import StockChart from './pages/stock-chart';
import TutorialPage from './pages/toturial-page';

function App() {

	return (
		<div>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/budget-tracker' element={<Budget/>}></Route>
				<Route path="/currency-converter" element={<CurrencyConverter/>}></Route>
				<Route path='/stock-chart' element={<StockChart/>}/>
				<Route path='/tutorial' element={<TutorialPage/>}/>
			</Routes>
		</div>
	);
}

export default App;
