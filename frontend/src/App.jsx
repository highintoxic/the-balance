import Home from './pages/home'
import NavBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Budget from './pages/budget-calculator';
import CurrencyConverter from './pages/currency-converter';

function App() {

	return (
		<div>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/budget-tracker' element={<Budget/>}></Route>
				<Route path="/currency-converter" element={<CurrencyConverter/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
