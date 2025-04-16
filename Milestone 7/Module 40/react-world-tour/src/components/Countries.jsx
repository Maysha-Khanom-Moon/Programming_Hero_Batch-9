import React, { useEffect, useState } from 'react'

import Country from './Country'

function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        // side effect code here
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                // key is not an id, but it serves a similar purpose
                // unique, immutable, not appeared in the html
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    )
}

export default Countries
