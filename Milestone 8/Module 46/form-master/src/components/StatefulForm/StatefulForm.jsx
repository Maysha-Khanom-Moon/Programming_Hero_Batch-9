import { useState } from "react";

function StatefulForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
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
            <button>Submit</button>
        </form>
        </div>
    )
}

export default StatefulForm
