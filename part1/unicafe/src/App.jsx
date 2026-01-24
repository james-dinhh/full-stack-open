import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodClick = () => setGood(good + 1)
  const addNeutralClick = () => setNeutral(neutral + 1)
  const addBadClick = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h2>give feedback </h2>
      <button onClick={addGoodClick}>good</button>
      <button onClick={addNeutralClick}>neutral</button>
      <button onClick={addBadClick}>bad</button>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all ={all} average={average} positive={positive} />
    </div>
  )
}

export default App