import Client from "../api/client"

import React, { useEffect, useState } from "react";

interface Props {
  updateParentZip: (zip: number) => void
}

export default function Header({ updateParentZip }: Props) {
  const [zipCode, setZipCode] = useState(0)
  const [weather, setWeather] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // Client.getWeatherByZipCode(parseInt(zipCode))
    // .then(result => {
    //   setWeather(result);
    // })
    updateParentZip(zipCode)
    // setZipCode('')
  }

  useEffect(() => {
    console.log('this is weather:', weather);
    if (Object.keys(weather).length > 0 ) {
      setIsLoaded(true);
    }
  }, [weather])

  return (
    <div className="header">
      <h1>Weather App</h1>
      {isLoaded ? <h1>is true</h1>
      : <form className="zipSearch" typeof="submit" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="ZIP Code"
            name="zip"
            onChange={(e) => setZipCode(parseInt(e.target.value))}
          />
        <button type="submit">Search</button>
      </form>
      }
    </div>
  );
}



// // Class Comp

// export default class Header extends React.Component {
//   // props => { intro: 'hi' }
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: ''
//     }
//   }

//   componentDidMount() {
//     this.setState({ name: 'John Doe' })
//   }

//   componentDidUpdate() {
//     this.props.intro = 'bye'
//   }

//   render() {
//     return {
//       <div>
//         <p>{this.props.intro}, {this.state.name}</p>
//         <button onClick={() => this.setState({ name: 'Ryan' })} />
//       </div>
//     }
//   }
// }


// // Functional Comp
// const Header = ({ intro }) => {
//   const [name, setName] = useState('') // hook
//   const [didNameUpdated, setDidNameUpdated] = useState(false)

//   useEffect(() => {
//     setName('John Doe')
//   }, [])

//   useEffect(() => {
//     setDidNameUpdated(true)
//   }, [name])
// }

// export default Header
