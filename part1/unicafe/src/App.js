import React, { useState } from 'react';
import './App.css';
import Feedback from './components/feedback';
import Statistics from './components/statistics'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setFeedback = (feedback) => {
    if (feedback === '+') {
      setGood(good + 1);
    }
    else if (feedback === '0') {
      setNeutral(neutral + 1);
    }
    else if (feedback === '-') {
      setBad(bad + 1);
    }
  }


  return (
    <div>
      <Feedback setFeedback={setFeedback} />
      <h3>Statistics</h3>
      {!(good || neutral || bad) ? <h4>No feedback given</h4> :
        <table>
          <tbody>
            <Statistics text={'Good:'} num={good} />
            <Statistics text={'Neutral:'} num={neutral} />
            <Statistics text={'Bad:'} num={bad} />
            <Statistics text={'Total:'} num={good + neutral + bad} />
            <Statistics text={'Average:'} num={Number.parseFloat((good - bad) / (good + neutral + bad)).toFixed(1)} />
            <Statistics text={'Positive:'} num={`${Number.parseFloat((good / (good + neutral + bad)) * 100).toFixed(1)} %`} />
          </tbody>
        </table>
      }
    </div>
  )
}


export default App;
