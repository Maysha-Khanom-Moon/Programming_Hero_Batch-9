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