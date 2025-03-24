console.log("hello from js");
console.log(document);
console.log('\n');


// dynamic style
// css --> snake
// js --> camel
const Places = document.querySelectorAll('.important-places');
for (const place of Places) {
    place.style.backgroundColor = 'cadetblue';
}


// getAttribute
const title = document.getElementById('fruits-title');
console.log(title.getAttribute('class'));
console.log(title.getAttribute('style'));
console.log('\n');


// classList
let classListOfTitle = title.classList;
console.log(classListOfTitle);

classListOfTitle.add('red');
classListOfTitle.add('green');
classListOfTitle.remove('green');
classListOfTitle.toggle('green'); // if not exist then add, if exist then remove

classListOfTitle = title.classList; // not needed
console.log(classListOfTitle);
console.log('\n');