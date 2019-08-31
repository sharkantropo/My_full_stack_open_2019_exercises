import React from 'react'

const Weather= ({weather})=>
{
    return(<div className='climate'>
    <h4>Weather in {weather.location.name}</h4>
    <p>Temperature: {weather.current.temp_c} Celsius</p>
    <img src={weather.current.condition.icon} alt='A weather icon..'></img>
    <div>{weather.current.condition.text}</div>
    <p>Wind: {weather.current.wind_kph} kph direction {weather.current.wind_dir}</p>
    </div>)
}

export default Weather