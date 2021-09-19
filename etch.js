// Adding lots of divs
const body = document.querySelector('body');
const divInBody = document.createElement('div');

divInBody.classList.add('container');

body.appendChild(divInBody);

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    divInBody.appendChild(squareDiv);
}

// Changing background color on hover
const squareDiv = document.querySelectorAll('.square');

squareDiv.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "red";
    });
});