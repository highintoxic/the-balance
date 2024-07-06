import { Component } from "react";
import PropTypes from "prop-types";

const dummyText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam quae minima facilis quos accusamus harum ipsa aliquam doloribus repellat. Libero placeat doloribus minus inventore voluptates minima ad quod quisquam.";

class Card extends Component {
	render() {
		return (
			<a
				href={this.props.link ? this.props.link : "#"}
				className='btn-default overflow-hidden relative rounded-xl transition-all duration-100 -- hover:shadow-md border border-stone-300 bg-secondary hover:bg-gradient-to-t hover:from-secondary before:to-txt hover:-translate-y-[5px]'
			>
				<div className='flex items-center justify-center space '>
					<div className='w-full max-w-lg px-10 py-8 mx-auto rounded-lg shadow-xl '>
						<div className='max-w-md mx-auto space-y-6'>
							<h2 className='text-2xl font-bold text-primary'>
								{this.props.title}
							</h2>
							<div className='text-base'>
								<p className='font-normal text-txt'>
									{this.props.desc ? this.props.desc : dummyText}
								</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		);
	}
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string,
	link: PropTypes.link
};

export default Card;
