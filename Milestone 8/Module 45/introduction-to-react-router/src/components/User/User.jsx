import PropTypes from 'prop-types'

function User({user}) {

    const {name, email, phone} = user;

    const userStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: 'skyblue'
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User

