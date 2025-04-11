### React fundamentals
1. Component (function)
2. jsx --- Babel ---> html
3. Props
4. Conditional rendering
5. Array of object


### Event Handler
- html: onclick='func()'
- jsx: onClick={func}

- key difference with plain html:
    - camelCase
    - function reference (not a string for func call)
    
    - call a custom function: `onClick={() => greet('Alice')}`
    - use the event object: `onClick={(e) => console.log(e)}`

<br>

### why double render happens in react?
- React's `<StrictMode>` intentionally causes double rendering in development to catch bugs early
- what happens:
    - renders component --> unmounts it --> renders it again
- purpose:
    - to detect improper side effects, state updates after unmount, memory leaks, non-pure render logic
- only in development with `<StrictMode>`

<br>


## React Hook:
Hooks are special functions in React that let components remember things and do things.

- Imagine ur component is a toy robot
    - normally, every time its runs, it forgets everything
    - but with <b>hooks</b>, u give it a <b>memory</b> or <b>abilities</b> to remember or doing something when it starts

### useState
- a react hook that lets u add state to functional components
- a way to store and update values - like a counter, form input, toggle state, etc

- why useState, not normal function?
    - `useState` remember the value (`count`) across renders
    - `setCount` updates the value and triggers a re-render
- `useState`: persistent, auto re-render, encapsulated, declarative
