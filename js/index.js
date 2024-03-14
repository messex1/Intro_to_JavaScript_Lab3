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
elementsWithHoverEffect.forEach(element => {
    element.addEventListener('mouseover', mouseoverHandler);
    element.addEventListener('mouseout', mouseoutHandler);
});
