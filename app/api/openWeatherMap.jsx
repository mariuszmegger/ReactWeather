var axios = require('axios');

const OPEN_WEATHER_MAP_API = '0e6f60576db2aada1960ea7d82590377';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0e6f60576db2aada1960ea7d82590377&units=metric';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			// debugger;
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		},function(resp){
			throw new Error(resp);
		})
	}
}