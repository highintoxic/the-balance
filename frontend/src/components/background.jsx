import PropTypes from "prop-types"
import { Component } from "react";

class ReactiveFinanceBackground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mousePosition: { x: 0, y: 0 },
		};
	}

	handleMouseMove = (event) => {
		this.setState({
			mousePosition: { x: event.clientX, y: event.clientY },
		});
	};

	componentDidMount() {
		window.addEventListener("mousemove", this.handleMouseMove);
	}

	componentWillUnmount() {
		window.removeEventListener("mousemove", this.handleMouseMove);
	}

	calculateOffset(baseValue, mouseValue, windowSize, intensity = 20) {
		const offset = (mouseValue / windowSize - 0.5) * intensity;
		return baseValue + offset;
	}

	render() {
		const { mousePosition } = this.state;
        const { children } = this.props
		return (
			<div className='w-full h-screen'>
				<svg
					className='fixed top-0 inset-0 w-full h-full'
					xmlns='http://www.w3.org/2000/svg'
				>
					<defs>
						<filter id='glow'>
							<feGaussianBlur stdDeviation='3.5' result='coloredBlur' />
							<feMerge>
								<feMergeNode in='coloredBlur' />
								<feMergeNode in='SourceGraphic' />
							</feMerge>
						</filter>
					</defs>

					{/* Reactive lines */}
					{[...Array(20)].map((_, i) => {
						const baseX = -200 + i * 100;
						const offsetX = this.calculateOffset(
							baseX,
							mousePosition.x,
							window.innerWidth
						);
						return (
							<path
								key={i}
								d={`M${offsetX},0 Q${offsetX + 100},${
									400 + Math.sin(mousePosition.y / 50) * 100
								} ${offsetX + 200},800`}
								stroke='#4CAF50'
								strokeWidth='2'
								fill='none'
								opacity='0.2'
								filter='url(#glow)'
								className='transition-all duration-300 ease-out'
							/>
						);
					})}

					{/* Reactive floating circles */}
					{[...Array(15)].map((_, i) => {
						const baseX = Math.random() * 100;
						const baseY = Math.random() * 100;
						const offsetX = this.calculateOffset(
							baseX,
							mousePosition.x,
							window.innerWidth,
							5
						);
						const offsetY = this.calculateOffset(
							baseY,
							mousePosition.y,
							window.innerHeight,
							5
						);
						return (
							<circle
								key={i}
								cx={`${offsetX}%`}
								cy={`${offsetY}%`}
								r={Math.random() * 5 + 2}
								fill='#4CAF50'
								opacity='0.3'
								className='transition-all duration-300 ease-out'
							/>
						);
					})}
				</svg>

				{/* Content container */}
				<div className='relative z-10 w-full h-full'>
					{children}
				</div>
			</div>
		);
	}
}

ReactiveFinanceBackground.propTypes = {
  children: PropTypes.element
}

export default ReactiveFinanceBackground;
