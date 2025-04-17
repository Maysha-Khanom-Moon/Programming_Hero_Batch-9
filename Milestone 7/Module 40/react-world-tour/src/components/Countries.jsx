import React, { useEffect, useState } from 'react'

import Country from './Country'
import './Countries.css'

function Countries() {
    const [countries, setCountries] = useState([]); // list default value = []
    
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect( () => {
        // side effect code here
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        if (visitedCountries.includes(country)) {
            alert('You already visited this country');
            return;
        }
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
            <h4>Visited Countries: {visitedCountries.length}</h4>

            <ul style={{width: '15%'}}>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
            </div>

            <div className='country-container'>
                {
                    // key is not an id, but it serves a similar purpose
                    // unique, immutable, not appeared in the html
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries
