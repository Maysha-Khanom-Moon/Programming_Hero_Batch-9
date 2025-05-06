

function SimpleForm() {

    const handleSubmit = e => {
        // prevent default behavior of form submit (which is to refresh the page)
        e.preventDefault();

        console.log("Name:", e.target.name.value);
        console.log("Email:", e.target.email.value);
        console.log("form submitted");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' />
                <br />
                <input type="text" name='email' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
