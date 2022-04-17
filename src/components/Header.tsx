interface Props {
  zipCode: number
  city: string
  updateCity: (city: string) => void
  updateZip: (zipCode: number) => void
  handleSubmit: (e: React.SyntheticEvent) => void
  cityButton: boolean
  updateCityButton: (cityButton: boolean) => void
}

export default function Header({ zipCode, updateZip, city, updateCity, cityButton, updateCityButton, handleSubmit }: Props) {
  return (
    <div className="header">
      <div className="cloud"></div>
      <img src="./images/day.svg" alt="sun" className="sun" />
      <h1 className="white">Weather App</h1>
      <p className="white">Enter a {cityButton ? 'city name' : 'zip code'} below to see the weather.</p>
      <form typeof="submit" onSubmit={(e) => handleSubmit(e as React.SyntheticEvent)}>
        <input
          type={cityButton ? 'text' : 'number'}
          placeholder={cityButton ? 'City' : 'Zip code'}
          onChange={(e) => {
            if (cityButton) {
              (e.target.value) !== city && updateCity(e.target.value)
            } else {
              parseInt(e.target.value) !== zipCode && updateZip(parseInt(e.target.value))
            }
          }}
          className="search-bar"
          required
        />
        <div>
          <button type="submit" className="submit-button">Search</button>
          <button onClick={() => updateCityButton(true)} className="submit-button">Search by city</button>
        </div>
      </form>
    </div>
  );
}
