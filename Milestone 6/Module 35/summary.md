## JS
1. highly abstracted language
    - hiding the implementation details
    - showing only the functionality to the users

- don't need to do these manually:
    - resource management and memory allocation
    - garbage collection
    - then developers can focus on logic better
    - improve understandability and maintainability

<br>

2. a JIT compiled language
    - not a purely interpreted language
    - JUST-IN-TIME compiler converts the entire code into machine code execute them immediately
    - js ----> parsing --AST--> compilation (JIT) --> machine code ----> execution
    - AST: abstract syntax tree

<br>

3. a multi-paradigm language
- Paradigm: code structure that will determine the style or a way of programming
    1. procedural
    2. object-oriented
    3. functional

<br>

4. a proto-typed based language
    - non-primitive ---> object
    - object used as a proto-type (blue print or template) from which get the initial properties for a new object
        - like: array --> push, pop, slice, etc

<br>

5. a dynamically typed language
    - not need to specify the type
    - determines the type at runtime. Also can re-declare the type

<br>

### Execution context
- an abstract concept that represents the environment in which js code is evaluated and executed
1. gec (global execution context)
    - created when js file starts executing
    - contains the global ```this``` object (```window``` in browser, ```global``` in node.js)
    - only one gec exits throughout execution
2. fec (function execution context)
    - created whenever a function is invoked
    - each function call gets its own execution context
    - multiple FECs can exist simultaneously (stacked in the Call Stack)

### js single-threaded
- only one statement execute at a time
- only has one call stack
- runs code line by line
- must finished executing a piece of code before moving onto the next