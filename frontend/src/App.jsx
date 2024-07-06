import Card from "./components/card";
import links from "./pages.json";
function App() {

	return (
		<div>
			<div className='flex justify-center items-center h-screen space-x-4 bg-primary'>
				{links.map((x, i) => {
					return <Card key={i} title={x.title} desc={x.desc} link={x.link} />;
				})}
			</div>
		</div>
	);
}

export default App;
