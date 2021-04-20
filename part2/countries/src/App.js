import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [show, setShow] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [weather, setWeather] = useState({})
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
        setShow(response.data)
      })
  }, [])


  useEffect(() => {

    if (show.length === 0) {
      console.log("No weather to show")
    } else if (show.length === 1) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${show[0].capital}`)
        .then(response => {
          setWeather(response.data)
        })
    } else {
      // setWeather(weather)
    }
  }, [show])



  const onClickHandler = (newShow) => {
    setShow(newShow)
  }

  const filterHandler = (filterNew) => {
    setNewFilter(filterNew)
    setShow(countries.filter(country => country.name.toLowerCase().includes(filterNew.toLowerCase())))
    console.log(show)
  }

  return (
    <div>
      <Filter onChange={filterHandler} />
      <Countries show={show} onClick={onClickHandler} weather={weather} />
    </div>
  );
}

export default App;
