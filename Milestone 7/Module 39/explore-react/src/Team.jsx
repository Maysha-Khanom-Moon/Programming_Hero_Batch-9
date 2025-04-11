import { useState } from "react"

export default function Team() {
    
    // team - immutable
    // update team value - use setTeam
    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid orange',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }
    
    return (
        // style={{...teamStyle, color: 'green}}
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={() => setTeam(team + 1)}>Add</button>
            <button onClick={() => setTeam(team - 1)}>Remove</button>
        </div>
    )
}