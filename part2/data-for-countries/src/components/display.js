import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Weather from './weather'

const Displayer = ({ country }) => {
    const [capitalWeather,setWeather]=useState([]);
    const [flag,setFlag]=useState(false);
    useEffect(() => {
        axios.get(`https://api.apixu.com/v1/current.json?key=2352219608ed457fb3a12903193008&q=${country.capital}`)
            .then(response => {
                console.log('Promise fullfiled, succesfully fetched data');
                console.log(response);
                setWeather(response.data);
                setFlag(true);
            })
    }, [country.capital]);
    
   
    return (<div className='displayer'>
        <h2>{country.name}</h2>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h4>Languages</h4>
        <ul>
            {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img className='imagen' src={country.flag} alt='this is the country flag'></img>
        {flag && <Weather weather={capitalWeather}/>}
    </div>)
}

export default Displayer