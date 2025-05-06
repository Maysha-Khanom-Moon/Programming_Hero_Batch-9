### Controlled vs Uncontrolled component
| Controlled                       | Uncontrolled                    |
| -------------------------------- | ------------------------------- |
| Uses `value` + `onChange`        | Uses `defaultValue` + `ref`     |
| React stores & updates the value | Browser manages value           |
| Good for real-time validation    | Good for simple or legacy forms |
| React is the boss                | Html is the boss            |
| Can't type anything              | Can type freely           |