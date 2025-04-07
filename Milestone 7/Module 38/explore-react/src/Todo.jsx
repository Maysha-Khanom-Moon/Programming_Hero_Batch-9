/**
 * - function name as file name
 * 
 * - export: export the component, there can be multiple components
 * 
 * - export default: only one component can be exported by default
 */
export default function Todo({task = 'Task'}) {
    return (
        <li>Task: {task}</li>
    )
}