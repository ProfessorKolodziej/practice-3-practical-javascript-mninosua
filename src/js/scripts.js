
const myName = "Maria";
const myAge = 22;

console.log(myAge);

// Practical Javascript
// Show and hide an element on the page

// Find the element to hide
const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

// Write a function that toggles the show/hide classes

function toggleParagraph() {
	toggledParagraph.classList.toggle("show");
	toggledParagraph.classList.toggle("hide");
	console.log("My toggle function");
	console.log(toggledParagraph);
}


// find the button and toggle the paragraph when we click it
const toggleButton = document.querySelector("#toggle-control");
toggleButton.addEventListener("click", toggleParagraph);
