interface Props {
  updateZip: (zipCode: number) => void
  handleSubmit: (e: React.SyntheticEvent) => void
}

export default function Header({ updateZip, handleSubmit }: Props) {
  return (
    <div className="header">
      <h1>Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <form className="zipSearch" typeof="submit" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ZIP Code"
          name="zip"
          onChange={(e) => updateZip(parseInt(e.target.value))}
        />
        <div>
          <button type="submit">Search</button>
        </div>
      </form>

    </div>
  );
}
