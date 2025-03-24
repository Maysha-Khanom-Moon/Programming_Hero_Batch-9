console.log("hello from js");
console.log(document);
console.log('\n');


// dynamic style
const importantPlaces = document.querySelectorAll('.important-places');
for (const place of importantPlaces) {
    place.style.color = 'red';
}