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


### useState
- a react hook that lets u add state to functional components
- a way to store and update values - like a counter, form input, toggle state, etc

- why useState, not normal function?
    - `useState` remember the value (`count`) across renders
    - `setCount` updates the value and triggers a re-render
- `useState`: persistent, auto re-render, encapsulated, declarative