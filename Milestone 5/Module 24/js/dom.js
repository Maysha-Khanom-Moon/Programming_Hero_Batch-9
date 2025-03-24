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