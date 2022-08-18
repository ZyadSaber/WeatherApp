import {memo} from 'react'

const WeatherView = (current : any) => {

    return(
        <div className="weather_data">
        <h2>{current.current.city}</h2>
        <h3>{current.current.date}</h3>
        <h1>{current.current.weather}</h1>
        <p>{current.current.condition}</p>
      </div>
    )
}
export default memo(WeatherView)