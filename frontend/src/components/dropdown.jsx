import { Component, useState } from "react";
import PropTypes from "prop-types";

export default class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false, searchTerm: "", value: "" };
	}

	toggleDropdown = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	handleSearchChange = (e) => {
		this.setState({ searchTerm: e.target.value.toLowerCase() });
	};

	handleSelectValue = (e) => {
		this.setState({ value: e });
        this.props.onSelectOption(e)
		this.toggleDropdown()
	};
	render() {
		const items = this.props.items.filter((item) =>
			item.toLowerCase().includes(this.state.searchTerm)
		);

		return (
			<div className='relative'>
				<button
					id='dropdown-button'
					className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
					onClick={this.toggleDropdown}
				>
					<span className='mr-2'>
						{this.state.value ? this.state.value: this.props.title}
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-5 h-5 ml-2 -mr-1'
						viewBox='0 0 20 20'
						fill='currentColor'
						aria-hidden='true'
					>
						<path
							fillRule='evenodd'
							d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
				<div>
					<div
						id='dropdown-menu'
						className={`${
							this.state.isOpen ? "" : "hidden"
						} absolute flex flex-col right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 h-[35vh]`}
					>
						<input
							id='search-input'
							className='w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none'
							type='text'
							placeholder='Search'
							autoComplete='off'
							value={this.state.searchTerm}
							onChange={this.handleSearchChange}
						/>
						<div className='overflow-y-scroll scrollbar-none'>
							{items.map((item, i) => (
								<option
									key={i}
									className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
									onClick={() => this.handleSelectValue(item)}
								>
									{item}
								</option>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Dropdown.propTypes = {
	items: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
    onSelectOption: PropTypes.func.isRequired
};
