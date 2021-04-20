import React from 'react'
import Header from './Header'
import ErrorMsg from './ErrorMsg'

const Filter = (props) => {
    const handleEvent = event => {
        props.onChange(event.target.value)
    }
    return (
        <div>
            <Header text={"Phonebook"}/>
            <ErrorMsg message={props.errorMsg}/>
            <div>
                filter shown with <input onChange={handleEvent} value={props.val}/>
            </div>
        </div>
    )
}

export default Filter