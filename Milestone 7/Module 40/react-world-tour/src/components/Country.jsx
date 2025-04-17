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

            <button>Visited</button>
        </div>
    )
}