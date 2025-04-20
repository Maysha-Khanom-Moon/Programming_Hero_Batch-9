import { useEffect, useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch';

function App() {
  const [Watches, setWatches] = useState([]);

  useEffect( () => {
    // local folder api (in public folder)
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])

  // we can generate fake data using json generator or AI
  // in memory object
  //   const Watches = [
  //     {id: 1, name: 'Rolex', price: 120000},
  //     {id: 2, name: 'Casio', price: 45000},
  //     {id: 3, name: 'Tissot', price: 60000},
  //     {id: 4, name: 'Orient', price: 150000},
  //     {id: 5, name: 'Apple', price: 19000},
  //     {id: 6, name: 'Seiko', price: 50000},
  //     {id: 7, name: 'Omega', price: 200000},
  //     {id: 8, name: 'Samson', price: 70000}
  // ]

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Watches: </h2>
      {
        Watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
