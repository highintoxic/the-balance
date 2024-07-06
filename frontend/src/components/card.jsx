import { Component } from "react";
import PropTypes from "prop-types";

const dummyText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam quae minima facilis quos accusamus harum ipsa aliquam doloribus repellat. Libero placeat doloribus minus inventore voluptates minima ad quod quisquam.";

class Card extends Component {
	render() {
		return (
			<a
				href='#'
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
				<span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full'></span>
				<span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full'></span>
				<span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full'></span>
				<span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full'></span>
			</a>
		);
	}
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string,
};

export default Card;
