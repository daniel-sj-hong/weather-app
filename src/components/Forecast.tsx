import { ForecastEntry } from '../api/client'
import cloudy from "@bybas/weather-icons/design/fill/animation-ready/cloudy.svg";
import clearDay from "@bybas/weather-icons/design/fill/animation-ready/clear-day.svg";
import clearNight from "@bybas/weather-icons/design/fill/animation-ready/clear-night.svg";
import partlyCloudyDay from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg";
import partlyCloudyNight from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night.svg";
import rain from "@bybas/weather-icons/design/fill/animation-ready/rain.svg";
import partlyCloudyDayRain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-rain.svg";
import partlyCloudyDaySnow from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-snow.svg";
import partlyCloudyNightSnow from "@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-snow.svg";
import thunderstorms from "@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg";
import mist from "@bybas/weather-icons/design/fill/animation-ready/mist.svg";

interface Props {
  daily: ForecastEntry[]
}

export default function Forecast({ daily }: Props) {
  console.log('daily: ', daily);

  const day = (dt: number) => {
    let date = new Date(dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day];
  }

  const iconMapping: any = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyCloudyDay,
    "02n": partlyCloudyNight,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": partlyCloudyDayRain,
    "10n": partlyCloudyNightRain,
    "11d": thunderstorms,
    "11n": thunderstorms,
    "13d": partlyCloudyDaySnow,
    "13n": partlyCloudyNightSnow,
    "50d": mist,
    "50n": mist
  };

  return (
    <div className="col-half forecast-box overflow">
      {daily.map(forecast =>
        <div key={forecast.dt} className="width-90 row">
          <p>{day(forecast.dt)}</p>
          <p>High: {forecast.temp.max}</p>
          <p>Low: {forecast.temp.min}</p>
          <img src={iconMapping[forecast.weather[0].icon]} alt="icon" className='icons' />
        </div>
      )}
    </div>
  )
}
