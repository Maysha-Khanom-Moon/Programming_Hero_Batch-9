import './App.css'

function App() {

  // component: capitalize
  // in general function: camelCase

  // by convention: add 'handle' word before event handler
  function handleClick() {
    alert('button clicked');
  }

  const addToFive = (num) => alert(num + 5);

  return (
    <>
      <h2>React Core Concept 2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('button 2 clicked')}>Click Me 2</button>
      {/* don't call immediately */}
      <button onClick={() => addToFive(10)}>addToFive</button>
    </>
  )
}

export default App