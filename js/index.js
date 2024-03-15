const resourcesDiv = document.getElementById('resources');
const showResourcesButton = document.getElementById('show-resources');
const elementsWithHoverEffect = document.querySelectorAll('.list-group-item');
const primaryButtons = document.querySelectorAll('.btn-primary'); // Grab all primary buttons

function showResources() {
    resourcesDiv.classList.remove('d-none');
    const links = resourcesDiv.querySelectorAll('a');
    links.forEach(link => {
        link.classList.add('fw-bold');
    });
}

// Big button for body menu
showResourcesButton.addEventListener('click', showResources);

// Bold event listeners for mouseover and mouseout events
function mouseoverHandler(e) {
    e.currentTarget.classList.add('fw-bold');
}

function mouseoutHandler(e) {
    e.currentTarget.classList.remove('fw-bold');
}

// Make mouseover/out effect separate for each element
elementsWithHoverEffect.forEach(element => {
    element.addEventListener('mouseover', mouseoverHandler);
    element.addEventListener('mouseout', mouseoutHandler);
});

// Italic event listener for click event on primary buttons
primaryButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Stop the click event from propagating to the parent
        e.stopPropagation();

        // Check if the clicked element is a primary button
        if (e.target.classList.contains('btn-primary')) {
            // Find the closest '.list-group-item' parent and italicize its content
            let listItem = e.target.closest('.list-group-item');
            if (listItem) {
                // Target only the direct text nodes of the list item
                Array.from(listItem.childNodes).forEach(node => {
                    if (node.nodeType === 3) { // Node type 3 is a text node
                        node.textContent = node.textContent;
                        let italicSpan = document.createElement('span');
                        italicSpan.classList.add('fst-italic');
                        italicSpan.textContent = node.textContent;
                        node.parentNode.replaceChild(italicSpan, node);
                    }
                });
            }
        }
    });
});
