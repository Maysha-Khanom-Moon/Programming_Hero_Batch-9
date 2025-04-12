import './Friends.css'

export default function Friend({friend}) {
    return (
        <div className="box">
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
        </div>
    )
}