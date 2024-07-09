import links from "../pages.json";
import Card from "../components/card";
export default function Home() {
	return (
		<div className="">
			<div className='flex justify-center items-center h-screen space-x-4 p-2'>
				{links.map((x, i) => {
					return <Card key={i} title={x.title} desc={x.desc} link={x.link} />;
				})}
			</div>
		</div>
	);
}
