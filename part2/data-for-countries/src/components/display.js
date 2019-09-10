import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './weather'


const useDisplayWeather = (capital) => {
    const [capitalWeather, setWeather] = useState(null);
    useEffect(() => {
        const fetchDataFromApi = () => {
            axios.get(`https://api.apixu.com/v1/current.json?key=2352219608ed457fb3a12903193008&q=${capital}`)
                .then(response => {
                    setWeather(response.data)
                })
                .catch(err => console.log('unable to fetch weather data'));
        }
        fetchDataFromApi();
    }, [capital])

    return [capitalWeather];
}

const Displayer = ({ country }) => {
    const [capitalWeather] = useDisplayWeather(country.capital);

    return (<div className='displayer'>
        <h2>{country.name}</h2>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h4>Languages</h4>
        <ul>
            {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img className='imagen' src={country.flag} alt='this is the country flag'></img>
        {!capitalWeather ? null : <Weather weather={capitalWeather} />}
    </div>)
}

export default Displayer