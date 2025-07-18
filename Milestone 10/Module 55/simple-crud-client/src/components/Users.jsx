import { useState } from "react";
import { useLoaderData } from "react-router-dom"

export default function Users() {

    const loadedUsers = useLoaderData();  
    const [users, setUsers] = useState(loadedUsers);  

    const handleDelete = (_id) => {
        console.log('Deleted:', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert('Deleted successfully');
                const remainingUsers = users.filter(user => user._id !== _id);
                setUsers(remainingUsers);
            }
        })
    }

    return (        
        <div>
            <h2>Total users: {users.length}</h2>

            <div>
                {
                    users.map(user => <div style={{ border: "1px solid red", margin: "5px", padding: "0 10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center"}} key={user._id}>
                        <h3 style={{marginRight: "5px"}}>{user.name}: </h3>
                        <p>{user.email}</p>
                        <button onClick={() => handleDelete(user._id)} style={{ padding: "5px 10px", borderRadius: "5px", border: "none", backgroundColor: "tomato", color: "white", cursor: "pointer", marginLeft: "20px"}}>X</button>
                    </div>)
                }
            </div>
        </div>
    )
}
