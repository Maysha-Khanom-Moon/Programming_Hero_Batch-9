import { useState } from "react";

export default function Country({country}) {

    const divStyle = {
        border: '2px solid tomato',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const {flags, population, area, cca3} = country;
    return (
        <div style={divStyle}>
            <h3>Country: {country?.name?.common || 'Unknown'}</h3>
            <img style={{width: '200px', maxHeight: '120px'}} src={flags.png} alt="" />

            <div style={{width: '90%', display: 'flex', justifyContent: 'space-between'}}>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p><small>Code: {cca3}</small></p>
            </div>

            <div style={{width: '90%', height: '45px', display: 'flex', gap: '10px', alignItems: 'center'}}>
                <button onClick={handleVisited}>{visited ? 'Visited' : 'going'}</button>
                <p>{visited && 'I have visited this country'}</p>
            </div>
        </div>
    )
}