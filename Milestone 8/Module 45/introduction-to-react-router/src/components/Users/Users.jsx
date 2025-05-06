import { useLoaderData } from "react-router-dom"
import User from "../User/User";

function Users() {

  const users = useLoaderData();
  console.log(users);
  

  return (
    <div>
        <h2>Our Users: {users.length}</h2>
        <p>Fantastic and gentle people</p>

        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          {
            users.map(user => <User key={user.id} user={user}></User>)
          }
        </div>
    </div>
  )
}

export default Users
