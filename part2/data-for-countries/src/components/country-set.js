import React, {useState} from 'react'
import Displayer from './display'

const CountrySet = ({ country }) => {
    const [toggle, setToggle] = useState(false);
    const setBoolean = (bool) => setToggle(bool);
    return (<div>{country.name}
        <button onClick={() => setBoolean(!toggle)}>show</button>
        {toggle && <Displayer country={country} />}
    </div>);
}

export default CountrySet