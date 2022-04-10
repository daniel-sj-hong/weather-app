interface Props {
  zipCode: number
  updateZip: (zipCode: number) => void
  handleSubmit: (e: React.SyntheticEvent) => void
}

export default function Header({ zipCode, updateZip, handleSubmit }: Props) {
  return (
    <div className="header">
      <h1>Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <form typeof="submit" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ZIP Code"
          name="zip"
          onChange={(e) => parseInt(e.target.value) !== zipCode && updateZip(parseInt(e.target.value))}
          className="search-bar"
        />
        <div>
          <button type="submit" className="submit-button">Search</button>
        </div>
      </form>
    </div>
  );
}
