import React from 'react'

const CountryList = ({props}) => {
    return (
            <>
                {props.show.map((country) => {
                    return (
                        <div key={country.name}>
                            {country.name} <button onClick={() => props.onClick([country])}>show</button>
                        </div>
                    )
                })}
            </>
    )
}

export default CountryList