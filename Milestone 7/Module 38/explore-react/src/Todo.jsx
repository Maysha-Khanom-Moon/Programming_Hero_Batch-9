/**
 * - function name as file name
 * 
 * - export: export the component, there can be multiple components
 * 
 * - export default: only one component can be exported by default
 */
export default function Todo({task = 'Task', isDone}) {
    // conditional rendering
    if(isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>Work on: {task}</li>
}