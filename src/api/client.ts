import 'dotenv/config'
import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

export interface WeatherEntry {
  clouds: { all: number };
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
    temp: number;
  };
  name: string;
  weather: {
    main: string;
    description: string;
  }[];
  wind: { speed: number };
  coord: {
    lat: number,
    lon: number
  },
}

export interface ForecastEntry {
  temp: {
    max: number;
    min: number;
  },
  weather: {
    icon: string;
  }[],
  dt: number
}
class Client {
  async getWeatherByZipCode(zipCode: number) {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${key}`
    )
    return res.data as WeatherEntry;
  }
  async getForecast(lat: any, lon: any) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    )
    return res.data as ForecastEntry;
  }
  async getWeatherByCity(city: string) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
    )
    return res.data as WeatherEntry;
  }
}

export default new Client();
