import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Adder from './components/Adder'
import Filter from './components/Filter'
import personServices from './services/persons'
import ErrorMsg from './components/ErrorMsg'
import axios from 'axios'

function App() {
	const [persons, setPersons] = useState([
		{
			name: 'Arto Hellas',
			number: '805-903-9033'
		}
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [newFilter, setNewFilter] = useState('')
	const [show, setShow] = useState(persons)
	const [deleteId, setDeleteId] = useState();

	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		console.log("effect")
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				console.log("promise fulfilled")
				setPersons(response.data)
				console.log(response.data)
				setShow(response.data)
			})
	}, [])


	const submitName = (event) => {
		event.preventDefault()
		let areRepeats = false
		persons.forEach(person => {
			if (person.name === newName) {
				areRepeats = true
			}
		})
		if (areRepeats) {
			alert(`${newName} is already added to the phonebook`)
		} else {
			setPersons(persons.concat({ name: newName, number: newNumber }))
		}
	}

	const changing = (nameNew) => {
		setNewName(nameNew)
	}

	const numberChanger = (event) => {
		console.log(event.target.value)
		setNewNumber(event.target.value)
	}

	const changerFilter = (filterNew) => {
		setNewFilter(filterNew)
		if (filterNew === '') {
			setShow(persons)
		} else {
			setShow(persons.filter(person => person.name.toLowerCase().includes(filterNew.toLowerCase())))
		}
	}

	const addPerson = event => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber
		}
		
		let exists = false
		let changedPerson = null
		for (let i = 0; i < persons.length; i++) {
			if (newName === persons[i].name) {
				exists = true;
				changedPerson = persons[i];
				break;
			}
		}

		if (exists && window.confirm(`Change ${changedPerson.name}?`)) {
			personServices
				.change(changedPerson.id, personObject)
				.then(res => {
					setPersons(persons.map(person => {
						if (person.name === newName) {
							return personObject;
						}
						return person;
					}))
					setShow(persons.map(person => {
						if (person.name === newName) {
							return personObject;
						}
						return person;
					}))
					setErrorMessage(`Changed ${personObject.name}`)
					setTimeout(() => {
						setErrorMessage('')
					}, 5000)
				})
		} else if (!exists){
			personServices
				.create(personObject)
				.then(res => {
					setPersons(persons.concat(res.data));
					setShow(persons.filter(person => person.name.toLowerCase() === newFilter.toLowerCase()))
					if (newFilter === '') {
						setShow(persons.concat(res.data))
					}
					setNewName('')
					setNewNumber('')
					setErrorMessage(`Added ${personObject.name}`)
					setTimeout(() => {
						setErrorMessage('')
					}, 5000)
				})
		}
			

		
	}

	const numbersClickHandler = (personObj) => {
		setDeleteId(personObj.id);

		if (window.confirm(`Delete ${personObj.name}?`)) {
			personServices
				.del(personObj.id)
				.then(res => {
					console.log(res)
					setPersons(persons.filter(person => person.id != personObj.id))
					setShow(persons.filter(person => person.id != personObj.id))
					setErrorMessage(`Deleted ${personObj.name}`)
					setTimeout(() => {
						setErrorMessage('')
					}, 5000)
				}).catch(error => {
					setErrorMessage(`Already deleted ${personObj.name}`)
					setTimeout(() => {
						setErrorMessage('')
					}, 5000)

				})
		} else {
			console.log(`did not delete ${personObj.name}`)
		}

	}


	return (
		<div>
			<Filter errorMsg={errorMessage} onChange={changerFilter} val={newFilter} />
			<Adder submitHandler={addPerson} onChange={changing} numberHandler={(value) => numberChanger(value)} name={newName} number={newNumber} />
			<Numbers shows={show} onClick={numbersClickHandler} />
		</div>
	);
}

export default App;
