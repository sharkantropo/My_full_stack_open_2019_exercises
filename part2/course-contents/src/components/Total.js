import React from 'react'

const Total= ({parts}) =>
{
    const total = () =>{
        let arrayOfexercises= parts.map((part)=> part.exercises);
        return arrayOfexercises.reduce((acc, curVal) => acc+ curVal);
    }
    return(<p>Number of exercises {total()}</p>);
}

export default Total;