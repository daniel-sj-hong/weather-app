interface Props {
  zipCode: number
  updateZip: (zipCode: number) => void
  handleSubmit: (e: React.SyntheticEvent) => void
}

export default function Header({ zipCode, updateZip, handleSubmit }: Props) {

  return (
    <div className="header">
      <div className="cloud"></div>
      <img src="./images/day.svg" alt="sun" className="sun" />
      <h1 className="white">Weather App</h1>
      <p className="white">Enter a zip code below to see the weather.</p>
      <form typeof="submit" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ZIP Code"
          onChange={(e) => parseInt(e.target.value) !== zipCode && updateZip(parseInt(e.target.value))}
          className="search-bar"
          required
        />
        <div>
          <button type="submit" className="submit-button">Search</button>
        </div>
      </form>
    </div>
  );
}
