import tutorials from "./tutorials.json";
import TCard from "../components/tutorialCard";
import BaseLayout from "../layouts/BaseLayout";
import { useEffect, useState } from "react";
import {YTDetails} from "../api/yt-api"
export default function TutorialPage() {
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			tutorials.forEach(async (x) => {
				const data = await YTDetails(x)
				setData(prevData => [...prevData, data])
			})
		}
		fetchData()
	}, []);

	return (
		<BaseLayout>
			<div className='mt-20'>
				{data.map((x, i) => {
					return <TCard key={i} {...x} />;
				})}
			</div>
		</BaseLayout>
	);
}
