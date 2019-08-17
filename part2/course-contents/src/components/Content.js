import React from 'react'

const Part = ({part}) =>
{
    return(<li> {part.name}:  {part.exercises}</li>);
}



const Content = ({parts}) =>
{
    const rows= () => parts.map((part=> <Part key={part.id} part={part}  />))
    return (
     <ul>
         {rows()}
     </ul>
    );
}

export default Content; 