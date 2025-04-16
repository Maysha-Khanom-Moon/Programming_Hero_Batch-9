export default function Country({country}) {

    const divStyle = {
        border: '2px solid tomato',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        color: 'white'
    }

    return (
        <div style={divStyle}>
            <h3>Country: {country?.name?.common || 'Unknown'}</h3>
        </div>
    )
}