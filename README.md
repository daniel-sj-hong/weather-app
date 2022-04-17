# Weather App

Weather app to showcase front end skills.

![Animation](https://user-images.githubusercontent.com/80491609/162902167-1363869f-93b7-42a1-8d10-a8c7943c9160.gif)

## Main Functionality
- A user can input a zip code to see both the local weather and future forecast for that selected zip code.

## Implementation
- Created a button that holds a handleSubmit function. If the provided zip code is correct and the button is pressed, or the user presses 'enter', the function fires the API calls and retrieves back the weather data as a response from the API. Using the first API call, I'm able to get a latitude and longitude that I'm able to use for the second API call.
- Using props, I passed a state of zipCode and functions setZipCode & handleSubmit from my HomePage component into my Header component as that's where the input element is residing.
- Once the user enters in a valid zip code, data gets sent back to the HomePage component and we have all the data we need to populate the browser by passing the data down into the CurrentWeather and Forecast components.
- The timer in the CountDown component uses state to set the counter initially to 10 and subtract by 1 every second. Once the counter hits 0, setCounter resets the counter to 10 and calls the handleSubmit function, that was passed in via props, which holds the API calls for the current weather data and forecast data.

## Error Handling
- The first if statement in the catch of the HomePage component, is if our request to the API is bad.
- The middle if statement is if the user input a invalid zip code or accidentally typed a typo.
- The last if statement is if something is wrong with the API (server).
- I checked the errors codes by purposely giving the axios API call an invalid URL and setting break points in the Sources tab of the Inspector.

## Technologies
- HTML5
- CSS3
- JavaScript
- TypeScript
- React
- React functional components & hooks
- TypeScript interfaces
- Axios
- npm
- Open Weather Map API

## Future Features
- Make app mobile reponsive.
- User can search for the weather and forecast through a city search rather than zip code.
- Geolocation. By asking for permission for user location, the app will auto generate the weather and forecast for user's location
- Fahrenheit to celsius switcher.
- Deployment. 

## Instructions to run locally
- git clone the SSH key
- ```npm install```
- ```npm start```
