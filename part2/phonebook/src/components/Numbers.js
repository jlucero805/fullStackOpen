import React from 'react'
import Header from './Header'

const Numbers = (props) => {
    return (
        <div>
            <Header text={"Numbers"}/>
            <div>
                {props.shows.map(person => {
                    return (
                        <div key={person.id}>
                            {person.name} {person.number} <button onClick={() => props.onClick(person)}>delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Numbers 