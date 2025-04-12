### React 6 core concepts
1. Component (function which return jsx)
2. jsx --- Babel ---> html
3. Props
4. Event Handler
5. State
6. Side-effect (data load)


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

### Trigger, render and commit
This process fo requesting and serving UI has three steps:
1. Triggering a render (delivering the guest's order to the kitchen)
2. Rendering the component (preparing the order in the kitchen)
3. Committing to the DOM (placing the order on the table)


## React Hook:
Hooks are special functions in React that let components remember things and do things.

- Imagine ur component is a toy robot
    - normally, every time its runs, it forgets everything
    - but with <b>hooks</b>, u give it a <b>memory</b> or <b>abilities</b> to remember or doing something when it starts

<br>

Common react hooks:
- `useState, useEffect, useContext, useRef, useMemo, useCallback`

### useState
- a react hook that lets u add state to functional components
- a way to store and update values - like a counter, form input, toggle state, etc

- why useState, not normal function?
    - `useState` remember the value (`count`) across renders
    - `setCount` updates the value and triggers a re-render
- `useState`: persistent, auto re-render, encapsulated, declarative

### useEffect
- it's used for things that are side effects -- meaning they touch things outside the react
- like api calls, timers/ intervals, directly dom manipulating, event listeners, cleanups, accessing localStorage, etc.

<br>

`useEffect` = Do this extra work after the UI is ready -- but only when needed

- why useEffect, not normal function?
    - normal function - run on every render (too much api calls, slow app, and bugs)
    - `useEffect` - run only when needed