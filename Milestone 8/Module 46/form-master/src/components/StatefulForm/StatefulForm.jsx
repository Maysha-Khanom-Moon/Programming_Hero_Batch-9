
function StatefulForm() {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
        <form onSubmit={handleSubmit} action="">
            <input type="text" name='name' placeholder='Name' />
            <br />
            <input type="text" name='email' placeholder='Email' />
            <br />
            <input type="password" name="password" placeholder='Password' />
            <br />
            <button>Submit</button>
        </form>
        </div>
    )
}

export default StatefulForm
