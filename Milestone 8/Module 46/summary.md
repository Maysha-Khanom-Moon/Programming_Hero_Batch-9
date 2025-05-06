### Controlled vs Uncontrolled component
| Controlled                       | Uncontrolled                    |
| -------------------------------- | ------------------------------- |
| Uses `value` + `onChange`        | Uses `defaultValue` + `ref`     |
| React stores & updates the value | Browser manages value           |
| Good for real-time validation    | Good for simple or legacy forms |
| React is the boss                | Html is the boss            |
| Can't type anything              | Can type freely           |


<br>

### When which path should I choose?
| Situation                          | Method        | Why                          |
| ---------------------------------- | ------------- | ---------------------------- |
| Real-time input validation         | `useState`    | Controlled input             |
| Form value only needed on submit   | `useRef`      | Lightweight and simple       |
| Complex or multi-step forms        | `useState`    | Track progress and update UI |
| Integrating legacy/non-React forms | Native submit | Minimal React needed         |
| Large form, performance matters    | `useRef`      | Fewer re-renders             |
