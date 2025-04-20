import { useEffect, useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch';

function App() {
  // we can generate fake data using json generator or AI
  
  // 1. in memory object
  /* 
  const Watches = [
      {id: 1, name: 'Rolex', price: 120000},
      {id: 2, name: 'Casio', price: 45000},
      {id: 3, name: 'Tissot', price: 60000},
      {id: 4, name: 'Orient', price: 150000},
      {id: 5, name: 'Apple', price: 19000},
      {id: 6, name: 'Seiko', price: 50000},
      {id: 7, name: 'Omega', price: 200000},
      {id: 8, name: 'Samson', price: 70000}
  ] 
  */


  const [Watches, setWatches] = useState([]);

  useEffect( () => {
    // 2. local folder api ~ inside public folder
    // fetch('watches.json')

    // 3. external api by github
    // github json file --> raw file --> get the url
    fetch('https://raw.githubusercontent.com/Maysha-Khanom-Moon/local_api/refs/heads/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])

  
  // watch count state
  const [watchCount, setWatchCount] = useState(0);

  const handleAddWatch = () => {
    const newWatchCount = watchCount + 1;
    setWatchCount(newWatchCount);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Watches: </h2>
      <p>Watch Count: {watchCount}</p>
      {
        Watches.map(watch => <Watch key={watch.id} watch={watch} handleAddWatch={handleAddWatch}></Watch>)
      }
    </>
  )
}

export default App
