// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

/* 
 * <> </> ---> fragment tag
 * 
 * - this is not html, this is jsx
 */
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
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

function Student() {
  const student = {
    name: 'Moon',
    age: 22
  }
  return (
    <div className="student">
      <h3>This is a student.</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  )
}

export default App