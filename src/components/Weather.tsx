// import CountDown from "./CountDown";
import { WeatherEntry } from "../api/client";

interface WeatherEntryExtended extends WeatherEntry {
  handleSubmit: (e: React.SyntheticEvent) => void
}

export default function Weather({ main, name, weather, wind, handleSubmit }: WeatherEntryExtended) {
  return (
    <div className="section card">
      <img src={`./images/${(Math.round(main.temp) >= 80) ? 'hot' : (Math.round(main.temp) >= 60) ? 'perfect' : 'ice'}.jpg`} alt="ice" />
      <div className="row">
        <div className="col-half weather-box transition">
          <h2 className="local">Weather</h2>
          <p className="today">Today's weather for that zip code:</p>
          <table>
            <tbody>
              <tr>
                <td>City:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>description:</td>
                <td>{weather[0].description}</td>
              </tr>
              <tr>
                {/*Put other applicable "main" stuff in here*/}
                <td>Temperature:</td>
                <td>{Math.round(main.temp)}&deg;F</td>
              </tr>
              <tr>
                <td>Wind:</td>
                <td>{wind.speed} mph</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-half forecast-box">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
      {/* <CountDown handleSubmit={handleSubmit} /> */}
    </div>
  );
}
