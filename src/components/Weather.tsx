import CountDown from "./CountDown";
import { WeatherEntry } from "../api/client";

export default function Weather({ clouds, dt, main, name, weather, wind }: WeatherEntry) {
  return (
    <div className="section card">
      <h2>Local Weather</h2>
      <p>In your zip code, the weather is: {main.temp}&deg;F</p>
      <table>
        <tbody>
          <tr>
            <td>City</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Rain</td>
            <td>light right</td>
          </tr>
          <tr>
            {/*Put other applicable "main" stuff in here*/}
            <td>Temperature</td>
            <td>{main.temp}&deg;F</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>{wind.speed} mph</td>
          </tr>
        </tbody>
      </table>
      <CountDown />
    </div>
  );
}
