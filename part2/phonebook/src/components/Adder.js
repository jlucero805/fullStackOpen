import React from 'react'
import Header from './Header'

const Adder = (props) => {
	const handleChange = (event) => {
		props.onChange(event.target.value)
	}
    return (
        <div>
            <Header text={"Add a new number"}/>
			<form onSubmit={props.submitHandler}>
				<div>
					name: <input onChange={handleChange} value={props.name} />
				</div>
				<div>
					number: <input onChange={props.numberHandler} value={props.number} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
        </div>
    )
}

export default Adder