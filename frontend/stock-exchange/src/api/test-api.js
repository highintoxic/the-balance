export const url = 'https://us-stock-prices-live1.p.rapidapi.com/us_stockprice_live/?symbol=TSLA';
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '917229a9d3msh077f0741a1a3c64p1c34fejsndb691d9e821b',
		'x-rapidapi-host': 'us-stock-prices-live1.p.rapidapi.com'
	}
};
export const callapi = async ()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
