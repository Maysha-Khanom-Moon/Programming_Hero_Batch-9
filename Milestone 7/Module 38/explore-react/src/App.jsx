// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    // <> </> ---> fragment tag
    <>
      <h1>Vite + React</h1>
      <Person></Person>
    </>
  )
}

function Person() {
  const person = {
    name: 'John',
    age: 30
  }
  return <h3>I am {person.name} and my age is {person.age}</h3>
}

export default App