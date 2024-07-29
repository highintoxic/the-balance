import PropTypes from "prop-types";
import NavBar from "../components/navbar";
import ReactiveFinanceBackground from "../components/background";

export default function BaseLayout({ children }) {
	return (
		<div>
			<ReactiveFinanceBackground>
				<div>
					<NavBar />
				</div>
				<div>{children}</div>
			</ReactiveFinanceBackground>
		</div>
	);
}

BaseLayout.propTypes = {
	children: PropTypes.element,
};
