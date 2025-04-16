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
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    )
}

export default Countries
