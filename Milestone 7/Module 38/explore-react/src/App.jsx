// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

/**
 * - import another component from another file
 * - for default export component, we can use any name
 * - but for others, we have to use the same name
 */

import Todo1 from './Todo'
import Todo from './Todo'

/* 
 * <> </> ---> fragment tag
 * - this is not html, this is jsx (html inside js)
 */
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person name="John" age="30"></Person>
      <Person name="Jane" age="25"></Person>

      <Device name="Phone" price="1000"></Device>
      <Device price="2000"></Device>

      <Student></Student>


      {/**
       * ------- this is a jsx comment -------
       * 
       * - this Todo component is imported from Todo.jsx
      */}

      <Todo task='Learn React'></Todo>
      <Todo1></Todo1>
    </>
  )
}

/**
 * - function has a single parameter which is an object
 * - all arguments are passed as an object
 */
function Person(props) {
  const person = {
    name: props.name,
    age: props.age
  }
  return <h3>I am {person.name} and my age is {person.age}</h3>
}

/**
 * - destructuring the props object
 * - instead of props --> auto destructuring by using {}
 * - we can use default value also
 */
function Device({name='Lenovo', price=1000}) {
  // const {name, price} = props;
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
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