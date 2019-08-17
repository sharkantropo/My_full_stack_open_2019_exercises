import React, { useState } from 'react'
import './App.css'
import ShowAnecdote from './components/day-anecdote'

const App = (props) => {
  const [selected, setSelected] = useState(returnRanNum(props.anecdotes.length-1));
  const [anecdotesList,setVote]= useState(props.anecdotes.map((val)=> {return {anecdote: val, votes: 0};}));
  
  const changeAnecdote= (idx) =>
  {
    let new_idx= idx;
     while( new_idx === idx)
     {
       new_idx=returnRanNum(anecdotesList.length-1);
     }
     setSelected(new_idx);
  }
  
  const addVote= (featured_anecdote) =>
  {
    setVote([...anecdotesList.slice(0,selected), {anecdote: featured_anecdote.anecdote, votes: featured_anecdote.votes+1},...anecdotesList.slice(selected+1)]);
  }

  const returnHighestVoted= () =>
  {
      let highest_votes_count=anecdotesList[0]['votes'], highest_idx=0;
      for (let index = 0; index < anecdotesList.length-1; index++) {
        let next= index+1;
        if ((anecdotesList[next]['votes'] > highest_votes_count)) {
          highest_votes_count = anecdotesList[next]['votes'];
          highest_idx = next;
        }
      }
      return anecdotesList[highest_idx];
  }

  return (
    <div className='App-header'>
      <ShowAnecdote picked={anecdotesList[selected]} text={'Anecdote of the day'}/>
      <br/>
      <Button handleClick={()=>changeAnecdote(selected)} text={'Next anecdote'}/>
      <Button handleClick={()=>addVote(anecdotesList[selected])} text={'Vote'}/>
      <ShowAnecdote picked={returnHighestVoted()} text={'Anecdote with most votes'}/>
    </div>
  )
}

const Button = (props) => (
    <button className='myButton' onClick={props.handleClick}>
      {props.text}
    </button>
)

const returnRanNum = (num) => Math.round(Math.random() * num);

export default App;