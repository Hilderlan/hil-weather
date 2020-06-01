import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Api from "../../services/api"
import { faCloudShowersHeavy, faCloudSunRain, faSnowflake, faCloudRain, faCloudSun, faCloud, faExclamation } from "@fortawesome/free-solid-svg-icons"
import Search from '../../components/Search';
import './styles.css';

const initialValues = {
  temp: "",
  temp_min: "",
  temp_max: "",
  city: "",
  condition_code: "",
  description: "",
  icon: undefined
}

const weather_icon = {
  thunderstorm: faCloudShowersHeavy,
  rain: faCloudRain,
  snow: faSnowflake,
  clear: faCloudSun,
  clouds: faCloud,
  error: faExclamation
}

const Weather = () => {
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    fetchWeather(null)
  }, []);

  function fetchWeather(e) {
    let city_name = "";
    if(e){
      e.preventDefault();
      city_name = e.target.elements.city.value
    }
    console.log(city_name);
    
    Api.index(city_name)
      .then((response) => {        
        setValues({
          temp: response.data.results.temp,
          temp_min: response.data.results.forecast[0].min,
          temp_max: response.data.results.forecast[0].max,
          city: response.data.results.city,
          condition_code: response.data.results.condition_code,
          description: response.data.results.description,
        });
      })
  }

  function getWeatherIcon(code) {
    switch (Number.parseInt(code)) {
      case 24: case 0: case 4: case 47:
          return weather_icon.thunderstorm
      
      case 10: case 11: case 12: case 20: case 37: case 38: case 39: case 40: case 45:
        return weather_icon.rain
      
      case 26: case 28: case 25: case 29: case 30:
        return weather_icon.clouds
      
      case 27: case 44: case 31:
        return weather_icon.clear
        
      default:
        return weather_icon.error
      
    }
  }

  return (
    <div className="container">
      <Search fetchWeather= { fetchWeather } />
      <div className="card">
        <h1>{values.city}</h1>
        <FontAwesomeIcon icon={ getWeatherIcon(values.condition_code) } size="10x" />
        <h1 className="temp">{values.temp}&deg;</h1>
        <h3 className="min-max">
          <span>{values.temp_min}&deg;</span>
          <span>{values.temp_max}&deg;</span>
        </h3>
        <h4>{values.description}</h4>
      </div>
    </div>
  )
}

export default Weather
