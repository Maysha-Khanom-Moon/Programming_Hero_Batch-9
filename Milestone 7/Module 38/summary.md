## React
- a js library used for building user interfaces ~ by Meta

1. component-based architecture
    - UI is broken down into reusable components (like building blocks)
    - each component manages its own logic and rendering
2. virtual dom 
    - used to update only the parts of UI that have changed, making it very fast
3. jsx (js xml) 
    - a syntax extension that lets you write html inside js
4. unidirectional data flow
5. hooks - useState, useEffect, etc


### React vs Angular
- react gives u more freedom and u choose ur tools and libraries - lego blocks
- angular is opinionated and comes with everything included - u follow its structure <br>

![React vs Angular](../../images/react_angular.png)


### Component
A <b>react component</b> is a js function or class that returns <b>jsx</b> (html-like code) to render part of the UI. Like a <b>custom html tag</b> that builds part of a webpage
- always capitalize component names, because react treats lowercase tags as html elements.
- component flow: parent to child
- file names are capitalized too (by convention)


### The rules of jsx
1. return a single root element
    - to return multiple elements, wrap them with a single parent tag
        - ``` <> </>  -->  fragment tag``` (like div)

    <br>
    
    - <b>in js:</b> `()` not needed
        - but for implicit return of object `()` needed
        - otherwise js think it's a block of code 
    - <b>in jsx:</b> for explicit return `return ( ... jsx ... )` must
        - but for single line, no need
    
2. close all the tags explicitly
    - `<img>` must become `</img>`

3. must use camelCase
    - `class --> className`
    - `onclick --> onClick`
    - `tabindex --> tabIndex`
    - `background-color --> backgroundColor`

4. for dynamic content: `${} --> {}`
    - tag name can't be dynamic
    - for object / inline-style ==> double curly braces
        - one for dynamic (jsx), and another one for object / style


### what are props
- an object that contains arguments
- parent component pass info to its child components by giving props
- we can pass any js value through props, including objects, arrays, functions, etc.