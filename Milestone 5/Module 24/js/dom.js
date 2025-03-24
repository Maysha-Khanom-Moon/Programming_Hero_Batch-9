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

// setAttribute
title.setAttribute('class', 'red');
title.setAttribute('style', 'color: red');
title.setAttribute('title', 'tooltip set by js')


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


// style
const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '7px';
}
console.log('\n');

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'lightgray';
placesContainer.setAttribute('class', 'yellow-bg'); // but it will not change because of order-of-specificity