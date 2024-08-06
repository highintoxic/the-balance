import Card from "../../components/NEW/card";
import { useEffect, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import { YTDetails } from "../../api/yt-api";
import tutorials from "../tutorials.json";

export default function TutorialPage() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			tutorials.forEach(async (x) => {
				const data = await YTDetails(x);
				setData((prevData) => [...prevData, data]);
			});
		};
		fetchData();
	},[]);

	return (
		<BaseLayout>
			<div className='mt-20 flex flex-col justify-center items-center'>
				{data.map((x, i) => {
					
					return (
						
						<div key={i} className='w-2/3 m-5 h-1/4 rounded-2xl shadow-md px-4'>
							<Card
								key={i}
								icon={<img src={x.videoThumb} className='pr-10' />}
								title={x.videoTitle}
								description={x.channelName}
								btnText='Watch'
								btnTo={x.videoLink}
							/>
						</div>
					
					);
				})}
			</div>
		</BaseLayout>
	);
}
