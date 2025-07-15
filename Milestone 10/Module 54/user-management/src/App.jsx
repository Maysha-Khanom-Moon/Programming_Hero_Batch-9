import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log('Adding user:', { name, email });

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email })
    })
    
  }

  return (
    <>
      <h1>Users Management</h1>

      <form onSubmit={ handleAddUser } action="">
        <input type="text" placeholder='Name' name='name' /> <br />
        <input type="email" placeholder='Email' name='email' /> <br />
        <button type='submit'>Add User</button>
      </form>

      <h3>Total Users: {users.length}</h3>
      <div className='users'>
        {
          users.map(user => (
            <div style={{ border: '2px solid gray', margin: '10px', padding: '10px', borderRadius: '10px'}} key={user.id} className='user'>
              <h4>ID: {user.id}</h4>
              <h4>Name: {user.name}</h4>
              <p>Email: {user.email}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
