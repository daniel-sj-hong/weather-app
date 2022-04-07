import axios from "axios";

// NOTE: This includes a subset of the full response. Feel free to add more keys that you find valuable
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
  }
}

export interface FormattedCurrentWeatherEntry {
  coordinates: {
    lat: number,
    lon: number
  },
  temperature: number,
  wind: number,
  date: number,
  city: string,
  humidity: number,
  description: string
}

// NOTE: API Docs can be found here: https://openweathermap.org/current
const key = "55019652a29de8dae744a7a05b11b581";

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
    return res.data as FormattedCurrentWeatherEntry;
  }
}

export default new Client();
