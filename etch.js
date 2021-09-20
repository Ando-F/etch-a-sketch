// Adding erase button in div
const body = document.querySelector('body');

const divForButton = document.createElement('div');

divForButton.classList.add('btn-div');

body.appendChild(divForButton);

const button = document.createElement('button');

button.classList.add('btn');
button.textContent = "Erase"

divForButton.appendChild(button);

// Adding lots of divs
const divInBody = document.createElement('div');

divInBody.classList.add('container');

body.appendChild(divInBody);

for (let i = 0; i < 256; i++) { //256
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

// Adding functionality to button
squareDiv.forEach((square) => {
    button.addEventListener('click', () => {
        square.style.backgroundColor = "bisque";
    });
});