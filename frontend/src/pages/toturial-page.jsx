import tutorials from "./tutorials.json";
import TCard from "../components/tutorialCard";
import BaseLayout from "../layouts/BaseLayout";

export default function TutorialPage() {
	return (
		<BaseLayout>
			<div className='mt-20'>
				{tutorials.map((x, i) => {
					return <TCard key={i} link={x} />;
				})}
			</div>
		</BaseLayout>
	);
}
