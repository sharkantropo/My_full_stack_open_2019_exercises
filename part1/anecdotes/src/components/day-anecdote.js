import React from 'react'

const ShowAnecdote= (props) => <div><h2 className='App'>{props.text}</h2><p>{props.picked.anecdote}</p><div>Has {props.picked.votes} votes</div></div>

export default ShowAnecdote;