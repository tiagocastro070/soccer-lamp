import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-football-beta.p.rapidapi.com',
	headers: {
		'X-RapidAPI-Key': '6a4556e0famsh279d7cdf3c34fa9p1927ecjsne3cba55359dd'
	}
});

export default api;