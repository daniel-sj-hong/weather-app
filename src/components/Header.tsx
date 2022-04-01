import Client from "../api/client"

export default function Header() {
  Client.getWeatherByZipCode(92656).then(results => console.log(results))
  return (
    <div className="header">
      <h1>Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <input
        placeholder="ZIP Code"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
