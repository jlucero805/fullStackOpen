import React from 'react'

const Country = ({ props }) => {
    const country = props.show[0]
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(element => {
                    return <li key={element.name}>{element.name}</li>
                })}
            </ul>
            <img src={country.flag} width={100}></img>
            <h3>Weather in {country.capital}</h3>
            <img src={props.weather.current === undefined ? 'none' : props.weather.current.weather_icons[0]} alt={'No Picture'}></img>
            <p><strong>wind:</strong> {props.weather.current === undefined ? 'none' : props.weather.current.wind_speed} mph direction {props.weather.current === undefined ? 'none' : props.weather.current.wind_dir}</p>
        </div>
    )
}

export default Country
    