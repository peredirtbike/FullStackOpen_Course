import { useState } from 'react'

const Heading = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  if (props.total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  } else{
    return (
      <div>
        <StatisticsLine text="Good" value={props.feedbackCategory.good} />
        <StatisticsLine text="Neutral" value={props.feedbackCategory.neutral} />
        <StatisticsLine text="Bad" value={props.feedbackCategory.bad} />
        <StatisticsLine text="Total" value={props.total} />
        <StatisticsLine text="Average" value={props.average} />
        <StatisticsLine text="Positive Percentage" value={props.positivePercentage} endDelimiter='%' />
      </div>
    )
  }
}

const StatisticsLine = ({text, value, endDelimiter=''}) => {
  return(
  <div>
    <p>{text} {value} {endDelimiter}</p>
  </div>
  )
}

const App = () => {

  const totalFeedback = () => good + neutral + bad

  const averageFeedback = () => (good * scores.good) + (neutral * scores.neutral) + (bad * scores.bad) / totalFeedback()

  const positiveFeedbackPercentage = () => {
    let percentage = (good / totalFeedback()) * 100
    return percentage.toFixed(1)
  }

  const setFeedback = (feedbackCategory, changeStateFunc) => (
    changeStateFunc(feedbackCategory +1)
  ) 

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const scores = {
    good: 1,
    neutral: 0,
    bad: -1
  }
  return (
    <div>
      <Heading title="Give feedback" />
        <Button handleClick={() => setFeedback(good, setGood)} text="good" />
        <Button handleClick={() => setFeedback(neutral, setNeutral)} text="neutral" />
        <Button handleClick={() => setFeedback(bad, setBad)} text="bad" />
      <Heading title="Statistics" />
      <Statistics 
        feedbackCategory={{good,neutral,bad}}
        total={totalFeedback()}
        average={averageFeedback()}
        positivePercentage={positiveFeedbackPercentage()}
      />
    </div>
  )
}

export default App