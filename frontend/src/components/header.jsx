import PropTypes from "prop-types"
import { Component } from "react";
import Search from "./search";


class Header extends Component {
	render() {
		const { name } = this.props;

		return (
			<>
				<div className='xl:px-32 '>
					<h1 className='text-4xl ml-24'>{name}</h1>
					<Search />
				</div>
				
			</>
		);
	}
}

Header.propTypes = {
  name: PropTypes.string
}

export default Header;
