const key = '4ebe9cca89ac131d245d5962dc3108a0';

//get weather information
const getWeather = async (latitude, longitude) => {

   const base = 'https://api.openweathermap.org/data/2.5/weather?';
   const query = `lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

   const response = await fetch(base + query);
   const data = response.json();
   return data;
}

//get city information
const getCity = async (city) => {

    const base = 'http://api.openweathermap.org/geo/1.0/direct';
    const query = `?q=${city}&limit=5&appid=${key}`;

    const response = await fetch(base + query);
    const data = response.json();

    return data;
    
}

//getCity('Manchester')
//    .then(data => {
//        var latitude = data[0].lat;
//        var longitude = data[0].lon;
//        return getWeather(latitude, longitude);
//    })
//    .catch(err => console.log(error));
