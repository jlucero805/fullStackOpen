import React, { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const setOnClick = (setter, state) => {
        const set = () => {
            setAll(all + 1)
            setter(state + 1)
        }
        return set
    }

    return (
        <div>
            <Header text={"give feedback"}/>
            <Button clickHandler={setOnClick(setGood, good)} text={"good"}/>
            <Button clickHandler={setOnClick(setNeutral, neutral)} text={"neutral"}/>
            <Button clickHandler={setOnClick(setBad, bad)} text={"bad"}/>
            <Header text={"statistics"}/>
            <Statistics good={good} neutral={neutral} bad={bad} average={average} all={all}/>
        </div>
    )
}

const average = (good, neutral, bad) => {
    return (good + neutral + bad) / 3
}

const Button = ({ clickHandler, text }) =>
    <><button onClick={clickHandler}>{text}</button></>


const Header = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
} 

const Statistics = ({good, neutral, bad, average, all}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return <p>No feedback given</p>
    }
    return (
        <table>
            <Stat text={`good`} stat={good}/>
            <Stat text={`neutral`} stat={neutral}/>
            <Stat text={`bad`} stat={bad}/>
            <Stat text={`average`} stat={average(good, neutral, bad)}/>
            <Stat text={`positive`} stat={good / all}/>
        </table>
    )
}

const Stat = ({ text, stat }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{stat}</td>
            </tr>
        </tbody>
    )
}
export default App;
