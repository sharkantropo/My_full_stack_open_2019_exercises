import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CountrySet from './components/country-set'
import Displayer from './components/display'

const App = () => {
    const [keyword, setKeyword] = useState('');
    const [dataCountry, setData] = useState([]);
    

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setData(response.data);
            })
    }, []);

    const handleInputKeyword = (e) => {
        let keywordInput = evalInput(e.target.value, /[a-z]+\.?\s?/gi)
        setKeyword(keywordInput)
    };

    const filterAndMapdata = () => {
        if (keyword) {
            let filterkey = new RegExp(keyword, 'gi');
            let filteredList = dataCountry.filter(country => filterkey.test(country.name));
            return (!filteredList
                ? null
                : (filteredList.length <= 10 ? (filteredList.length === 1
                    ? <Displayer country={filteredList[0]} />
                    : filteredList.map(country => <CountrySet key={country.alpha3Code}  country={country} />))
                    : <div>Too many matches, specify another filter</div>));
        }
    }

    return (<div>
        <h2>Alphabetic search of countries</h2>
        <label htmlFor='keyword'>Find countries</label>
        <input type='text' id='keyword' name='keyword' value={keyword} onChange={handleInputKeyword} />
        {filterAndMapdata()}
    </div>)
}

const evalInput = (str, regex) => {
    str = str.match(regex);
    return !(str) ? '' : str.join('');
}

export default App