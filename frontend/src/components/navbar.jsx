import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	render() {
		return (
			<nav className='fixed top-0 z-10 w-full bg-secondary drop-shadow-lg'>
				<div className='flex justify-between px-20 py-5 items-center'>
					<Link to='/' className='text-xl text-gray-800 font-bold'>
						HotCoffee
					</Link>
					<div className='flex items-center'>
						<div className='flex items-center px-6'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 pt-0.5 text-gray-600'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								/>
							</svg>
							<input
								className='ml-2 block w-full py-1 pl-9 pr-3 sm:px-4 sm:font-medium outline-none shadow bg-primary rounded-md'
								type='text'
								name='search'
								id='search'
								placeholder='Search...'
							/>
						</div>
						<ul className='flex items-center space-x-6'>
							<li className='font-semibold text-gray-700'>
								<Link to='/'>Home</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
