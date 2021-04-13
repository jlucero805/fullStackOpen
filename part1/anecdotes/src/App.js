import React, { useState } from 'react'

function App() {
    const anectdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
    const [most, setMost] = useState(0)

    const setOnClick = () => {
        let randint = Math.floor(Math.random() * anectdotes.length)
        setSelected(randint)
    }

    const voteClick = () => {
        let newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
        let maxIndex = most
        for (let i = 0; i < newVotes.length; i++) {
            if (newVotes[maxIndex] < newVotes[i]) {
                maxIndex = i
            }
        }
        setMost(maxIndex)
    }

    return (
        <div>
            <Header text={"Anecdote of the Day"}/>
            <Anecdote anecdote={anectdotes[selected]} votes={votes[selected]}/>
            <Button clickHandler={voteClick} text={"vote"}/>
            <Button clickHandler={setOnClick} text={"next anecdote"}/>
            <Header text={"Anecdote with most votes"}/>
            <Anecdote anecdote={anectdotes[most]} votes={votes[most]}/>
        </div>
    );
}

const Header = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

const Anecdote = ({anecdote, votes}) => {
    return (
        <div>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </div>
    )
}

const Button = ({clickHandler, text}) => {
    return (
        <div>
            <button onClick={clickHandler}>{text}</button>
        </div>
    )
}

export default App;
