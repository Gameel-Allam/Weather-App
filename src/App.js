import './App.css';
import Search from './components/search/Search';
import Weather from './components/weather/Weather';
import { OPEN_WEATHER_URL, OPEN_WEATHER_KEY } from "./components/api";
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';

const App = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  // console.log(weatherData);

  const getSearch = (inputSearch) => {
    const [lat, lon] = inputSearch.value.split(' ');
    const forecast = fetch(`${OPEN_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`);
    const weather = fetch(`${OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=metric`);
    Promise.all([forecast, weather])
      .then(async (data) => {
        const forecast = await data[0].json();
        const weather = await data[1].json();
        setForecastData(forecast);
        setWeatherData({city:inputSearch.label, ...weather});
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <Search getSearch={getSearch} />
      <div className='container'>
        {weatherData&&<Weather weatherData={weatherData} />}
        {forecastData&&<Forecast forecastData={forecastData} />}
      </div>
    </div>
  );
}

export default App;
