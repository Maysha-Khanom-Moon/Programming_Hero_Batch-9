const Container = document.getElementById('places-container');
console.log(Container.childNodes);
console.log(Container.firstChild);
console.log(Container.childNodes[3]);
console.log(Container.lastChild.previousSibling);
console.log(Container.parentNode.parentNode.parentNode.parentNode); // null --> document --> html --> body --> main --> section


// createElement
const li = document.createElement('li');
li.innerText = 'Dhaka';
li.style.color = 'black';
Container.childNodes[3].appendChild(li);


const mainContainer = document.querySelector('main');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'New Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly
const section2 = document.createElement('section');
section2.innerHTML = 
`
    <h1>My Dress section</h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
        <li>Pants</li>
    </ul>
`;
mainContainer.appendChild(section2);

/**
 * dom.js already executed before this file
 * That's why those style is not included in this two section
 */