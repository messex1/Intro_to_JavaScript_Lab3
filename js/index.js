// Reference variable to the div element with the id of resources
const resourcesDiv = document.getElementById('resources');

// Reference variable to button with id show-resources
const showResourcesButton = document.getElementById('show-resources');

// Select all div elements with class 'list-group-item', as well as other elements that need the I-Beam hover effect removed
const elementsWithHoverEffect = document.querySelectorAll('.list-group-item, .p, .h4, .strong, .h1');


// Event handler function for the button that removes the class d-none from the div element and makes links bold
function showResources() {
    // Remove the 'd-none' class from the div element
    resourcesDiv.classList.remove('d-none');

    // Select all links inside the div and make them bold by adding 'fw-bold' class
    const links = resourcesDiv.querySelectorAll('a');
    links.forEach(link => {
        link.classList.add('fw-bold');
    });
}

// Add an event listener on the button that listens to the click event and call showResources function
showResourcesButton.addEventListener('click', showResources);

// Select all div elements with class 'list-group-item'
const divs = document.querySelectorAll('.list-group-item');

// Event handler function for mouseover event to make the text within the hovered div bold
function mouseoverHandler(e) {
    // Add the 'fw-bold' class to the text within the hovered div
    e.currentTarget.classList.add('fw-bold');
}

// Event handler function for mouseout event to remove bold text
function mouseoutHandler(e) {
    // Remove the 'fw-bold' class from the text within the div
    e.currentTarget.classList.remove('fw-bold');
}

// Add event listeners to each div element to handle mouseover and mouseout events independently
divs.forEach(div => {
    div.addEventListener('mouseover', mouseoverHandler);
    div.addEventListener('mouseout', mouseoutHandler);
});


//removes I-Beam hover effect on div elements
// Loop through each div and set user-select property to none
divs.forEach(div => {
    div.style.userSelect = 'none';
});

// Loop through each element and set user-select property to none
elementsWithHoverEffect.forEach(element => {
    element.style.userSelect = 'none';
});