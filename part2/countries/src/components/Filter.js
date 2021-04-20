import React from 'react'

const Filter = (props) => {
    return (
        <div>
            find countries <input onChange={(event) => props.onChange(event.target.value)}/>
        </div>
    )
}

export default Filter