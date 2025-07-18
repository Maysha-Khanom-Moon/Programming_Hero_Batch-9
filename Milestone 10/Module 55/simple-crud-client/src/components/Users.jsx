import { useLoaderData } from "react-router-dom"

export default function Users() {

    const users = useLoaderData();    
    
    return (        
        <div>
            <h2>{users.length}</h2>

            <div>
                {
                    users.map(user => <div style={{ border: "1px solid red", margin: "5px", padding: "0 10px", borderRadius: "5px"}} key={user._id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>)
                }
            </div>
        </div>
    )
}
