import { Component } from "react";
import PropTypes from "prop-types";
class SCard extends Component {
	render() {
		const { children } = this.props;
		return (
			<div className={"w-full h-full rounded-xl relative p-8 border-2 bg-secondary text-txt shadow-md"}>
				{children}
			</div>
		);
	}
}

export default SCard;

SCard.propTypes = {
    children: PropTypes.any
}