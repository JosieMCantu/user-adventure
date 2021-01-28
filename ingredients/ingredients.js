import { findById } from '../utils/utils.js';
import { ingredientsData } from '../data/data.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const form = document.querySelector('form');
const img = document.getElementById('image-section');
const resultsSpan = document.getElementById('results-span');
const backToElement = document.getElementById('back-to-elements');

//get the id of the ingredient from the url
const params = new URLSearchParams(window.location.search);

//get the value of the id key in the URL query string
const ingredientId = params.get('id');

//use the id to findbyid the ingredient in the ingredientData
const ingredient = findById(ingredientsData, ingredientId);


//use the ingredient to populate the elements of the html
h1.textContent = ingredient.title;
p.textContent = ingredient.description;
img.src = `../assets/${ingredient.image}`;

//on submit:
// -calculate the user's new stats (power and peace)

for (let choice of ingredient.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);
    form.append(label);
}
//creates the submit
const button = document.createElement('button');
button.textContent = 'Make your choice!';
form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(ingredient.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

    //Adds the choice points to the user
    user.peace += choice.peace;
    user.power += choice.power;

    //Adds stats to local storage
    localStorage.setItem('USER', JSON.stringify(user));

    //Adds results to results span
    resultsSpan.textContent = choice.result;
    user.completed[ingredientId] = true;

    //Puts stats in local storage
    localStorage.setItem('USER', JSON.stringify(user));

});
// -send user back to map
backToElement.addEventListener('click', () => {
    window.location = '../elements/index.html';
});