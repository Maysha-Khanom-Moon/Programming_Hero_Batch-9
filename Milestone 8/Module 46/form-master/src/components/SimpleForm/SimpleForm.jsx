

function SimpleForm() {

    const handleSubmit = e => {
        // prevent default behavior of form submit (which is to refresh the page)
        e.preventDefault();
        console.log("form submitted");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm
