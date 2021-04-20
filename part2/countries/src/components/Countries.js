import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './CountryList'
import Country from './Country'


const Countries = (props) => {
    if (props.show.length === 1) {
        const country = props.show[0]

        return (

            <Country props={props} />
        )
    } else if (props.show.length <= 10) {
        return (
            <CountryList props={props}/>
        )
    } else {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
}

export default Countries