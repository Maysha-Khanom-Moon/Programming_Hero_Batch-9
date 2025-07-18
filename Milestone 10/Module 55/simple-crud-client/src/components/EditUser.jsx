import { useLoaderData } from "react-router-dom"


export default function EditUser() {

    const user = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = { name, email };
        console.log(user);
        
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
            <h3>Update information of {user.name}</h3>

            <form onSubmit={handleUpdate} style={{width: "300px", display: "flex", flexDirection: "column", border: "1px solid red", padding: "10px", borderRadius: "5px"}} action="">
                <input type="text" name="name" id="" defaultValue={user.name} /> <br />
                <input type="email" name="email" id="" defaultValue={user.email} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}
