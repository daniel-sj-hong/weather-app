import React, { useState } from "react";

interface Props {
  updateParentZip: (zip: number) => void
}

export default function Header({ updateParentZip }: Props) {
  const [zip, setZip] = useState(0)


  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    updateParentZip(zip)
  }

  return (
    <div className="header">
      <h1>Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      {/* <h1>is true</h1> : */}
      <form className="zipSearch" typeof="submit" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ZIP Code"
          name="zip"
          onChange={(e) => setZip(parseInt(e.target.value))}
        />
        <div>
          <button type="submit">Search</button>
        </div>
      </form>

    </div>
  );
}
