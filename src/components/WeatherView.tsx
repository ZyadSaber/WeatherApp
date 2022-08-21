import {memo} from 'react'

interface WeatherViewProps {
current: {
  city: string,
  date: string,
  weather: string,
  condition: string,
}
}

const WeatherView = ({current} : WeatherViewProps) => {
    return(
        <div className="weather_data">
        <h2>{current.city}</h2>
        <h3>{current.date}</h3>
        <h1>{current.weather}</h1>
        <p>{current.condition}</p>
      </div>
    )
}
export default memo(WeatherView)