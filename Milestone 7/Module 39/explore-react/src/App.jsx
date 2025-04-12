import './App.css'
import './Friends.css'
import Counter from './Counter'
import Team from './Team';
import Users from './Users';
import Friend from './Friend';
import { useEffect, useState } from 'react';

function App() {

  // component: capitalize
  // in general function or hook: camelCase

  // by convention: add 'handle' word before event handler
  function handleClick() {
    alert('button clicked');
  }

  const addToFive = (num) => alert(num + 5);

  // useEffect
  const [friends, setFriends] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])

  return (
    <>
      <h2>React Core Concept 2</h2>

      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('button 2 clicked')}>Click Me 2</button>
      {/* don't call immediately */}
      <button onClick={() => addToFive(10)}>addToFive</button>
    </>
  )
}

export default App