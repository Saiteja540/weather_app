const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;

    details.innerHTML =
    `<h5 class="my-3">${cityDets.name}</h5>
    <div class="my-3">${weather.weather[0].description}</div>
    <div class="display-4 my-4">
      <span>${weather.main.temp}</span>
      <span>&deg;C</span>
    </div>`;

    if(card.classList.contains = 'd-none'){
        card.classList.remove('d-none');
    }

    let timeSrc = null;
    if(weather.weather[0].icon.substr(2)==='d'){
        timeSrc = 'images/day.svg';
    }else{
        timeSrc = 'images/night.svg';
    }
    time.setAttribute('src', timeSrc);
    const iconSrc = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconSrc);

}

const updateCity = async(city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets[0].lat, cityDets[0].lon);

    return {
        cityDets: cityDets[0],
        weather: weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(error));
})

