import React from 'react'
import useInputState from '../../hooks/useInputState';

function HookForm() {

    const [name, handleNameChange] = useInputState('Moon');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HookForm
