import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Forms from './components/form.component';


const API_Key = "f18c24f3641f82e1e9212238c6d38fa7";
//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      city : 'Initial',
      country : 'Initial',
      temp:'Initial',
      temp_max:'Initial',
      temp_min:'Initial',
      icon:'Initial',
      error:false
    };

    this.weatherIcon = {
      ThunderStorm : 'wi-thunderstorm',
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    };

  }

  get_WeatherIcon (icons, weatherId) {
    let id = Math.floor(weatherId/100);
    console.log(id);
    switch(id) {
      case 2:
        this.setState({icon:icons.ThunderStorm});
        break;
      case 3:
        this.setState({icon:icons.Rain});
        break;
      case 6:
        this.setState({icon:icons.Snow});
        break;
      case 7:
        this.setState({icon:icons.Atmosphere});
        break;
      case 8:
        this.setState({icon:icons.Clear});
        break;
      default:
        this.setState({icon:icons.Clouds});
        break;
    }
  }

  calCelsius(temp) {
    let value = Math.floor(temp-273.15);
    return value;
  }
  getWeatherData = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
   if (city && country)
   {
    const api_Call_Data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
    const response = await api_Call_Data.json();
    console.log(response);
    this.setState ({
      city:response.name,
      country:response.sys.country,
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min :this.calCelsius(response.main.temp_min),
      temp: this.calCelsius(response.main.temp),
      description:response.weather[0].description,
    });
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
   } else {
     this.setState({error:true});
   }
  }

  render() {
    return (
      <div className = "app">
        <Forms loadWeather = {this.getWeatherData} error = {this.state.error}/>
        <Weather city = {this.state.city}
         country = {this.state.country} 
         temp={this.state.temp}
         temp_min = {this.state.temp_min}
         temp_max = {this.state.temp_max}
         icon = {this.state.icon}
         description = {this.state.description}/>
      </div>
    );
  }
}
export default App;
