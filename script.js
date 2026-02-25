// script.js

// Interactive Page Flipping Functionality

// Function to flip to the next page
function flipNext() {
    const currentPage = document.querySelector('.current-page');
    const nextPage = currentPage.nextElementSibling;
    if (nextPage) {
        currentPage.classList.remove('current-page');
        nextPage.classList.add('current-page');
    }
}

// Function to flip to the previous page
function flipPrevious() {
    const currentPage = document.querySelector('.current-page');
    const previousPage = currentPage.previousElementSibling;
    if (previousPage) {
        currentPage.classList.remove('current-page');
        previousPage.classList.add('current-page');
    }
}

// Add event listeners for page flip buttons
document.getElementById('next-button').addEventListener('click', flipNext);
document.getElementById('previous-button').addEventListener('click', flipPrevious);

// Initial setup: hide all pages except the first
document.querySelectorAll('.page').forEach((page, index) => {
    if (index !== 0) page.style.display = 'none';
});

// Function to initialize the viewer
function initializeViewer() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index !== 0) page.style.display = 'none';
        else page.classList.add('current-page');
    });
}

// Call to initialize viewer on page load
window.onload = initializeViewer;