// open the link: https://jsonplaceholder.typicode.com/users
// load data
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}


// load users
function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(json => displayUsers(json))
}

// display users
function displayUsers(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} \nEmail: ${user.email}\n\n`;
        ul.appendChild(li);
    }
}