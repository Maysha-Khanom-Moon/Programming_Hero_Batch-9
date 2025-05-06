import React from 'react'
import useInputState from '../../hooks/useInputState';

function HookForm() {

    // const [name, handleNameChange] = useInputState('Moon');
    const emailState = useInputState('moon@me.com');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleSubmit} type="text" name='name' /> */}
                <br />
                <input {...emailState} type="email" name='email' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HookForm
