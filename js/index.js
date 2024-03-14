//reference variable to  div element with id resources
const resourcesDiv = document.getElementById('resources');

//reference variable to button with id show-resources
const showResourcesButton = document.getElementById('show-resources');



//event listener on button that listen to  click event
showResourcesButton.addEventListener('click', function() {

// Event handler function for button element id
// removes class d-none from div element
    resourcesDiv.classList.remove('d-none');
});


//e is event object.

function eventHandlerFunction(e) {
    // Check event type is mouseover, add 'fw-bold' class to element
    if (e.type === 'mouseover') {
        e.target.classList.add('fw-bold');
    } else if (e.type === 'mouseout') {
        // If event type mouseout, remove 'fw-bold' class from element
        e.target.classList.remove('fw-bold');
    }
}

//event listener to div element with id resources

resourcesDiv.addEventListener('mouseover', eventHandlerFunction);
resourcesDiv.addEventListener('mouseout', eventHandlerFunction);