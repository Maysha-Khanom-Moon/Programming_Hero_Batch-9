import { useLoaderData } from "react-router-dom";

export default function EditUser() {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h3>Update information of {loadedUser.name}</h3>

      <form
        onSubmit={handleUpdate}
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <input type="text" name="name" defaultValue={loadedUser.name} /> <br />
        <input type="email" name="email" defaultValue={loadedUser.email} />{" "}
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
