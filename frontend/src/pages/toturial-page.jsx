import tutorials from "./tutorials.json";
import TCard from "../components/tutorialCard";

export default function TutorialPage() {
	
	return (
		<div className="mt-20">
			{
        tutorials.map((x, i) => {
          return <TCard key={i} link={x} />;
        })
      }
		</div>
	);
}
