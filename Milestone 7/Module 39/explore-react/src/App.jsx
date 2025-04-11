import './App.css'

function App() {

  function handleClick() {
    alert('button clicked');
  }

  return (
    <>
      <h2>React Core Concept 2</h2>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App