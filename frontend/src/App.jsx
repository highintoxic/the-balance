import Home from './pages/home'
import NavBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Budget from './pages/budget-calculator';

function App() {

	return (
		<div>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/budget-tracker' element={<Budget/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
