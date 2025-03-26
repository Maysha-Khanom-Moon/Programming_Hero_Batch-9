console.log('helo');

const areaContainer = document.getElementById('area-container');

// Loop is necessary for NodeList
document.querySelectorAll('.calculate').forEach(button => {
    button.addEventListener('click', function(event) {
        // Use previousElementSibling to avoid text node issues
        // children to only access element nodes
        const i1 = event.target.parentNode.previousElementSibling.children[2].children[0].children[0].value;
        const i2 = event.target.parentNode.previousElementSibling.children[2].children[1].children[0].value;

        let area;
        
        // parent selection
        const parent = event.target.parentElement.previousElementSibling.children[0].innerText;
        console.log(parent);
        
        switch(parent) {
            case 'Ellipse': area = 3.1416 * i1 * i2;
            break;
            case 'Rectangle' || 'Parallelogram': area = i1 * i2;
            break;
            default: area = 0.5 * i1 * i2;
        }
        console.log('area: ' + area);
        
        // area adding
        const p = document.createElement('p');
        p.innerText = `Area of ${parent}: ${area} ${'\n'} where a = ${i1}, b = ${i2}`;
        p.setAttribute('class', 'bg-pink-50 p-2 rounded-md border-2')
        // areaContainer.appendChild(p);
        areaContainer.insertBefore(p, areaContainer.firstChild)
    });
});