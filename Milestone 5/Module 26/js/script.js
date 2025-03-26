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
        
        const parent = event.target.parentElement.previousElementSibling.children[0].innerText;
        console.log(parent);
        
        switch(parent) {
            case 'Ellipse': area = 3.1416 * i1 * i2;
            break;
            case 'Rectangle' || 'Parallelogram': area = i1 * i2;
            break;
            case 'Rhombus': area = 0.5 * i1 * i2;
            default: area = 0.5
        }
        console.log('area: ' + area);
        

    });
});