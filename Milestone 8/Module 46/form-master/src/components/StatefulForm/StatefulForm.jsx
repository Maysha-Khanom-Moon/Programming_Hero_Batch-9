import { useState } from "react";

function StatefulForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError('Password must be at least 8 characters');
        }
        else {
            console.log(name, email, password);
            setError('');
        }
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleNameChange} type="text" name='name' placeholder='Name' required />
            <br />
            <input onChange={handleEmailChange} type="text" name='email' placeholder='Email' />
            <br />
            <input onChange={handlePasswordChange} type="password" name="password" placeholder='Password' />
            <br />
            <input type="submit" value="Submit" />

            {
                error && <p>{error}</p>
            }
        </form>
        </div>
    )
}

export default StatefulForm
