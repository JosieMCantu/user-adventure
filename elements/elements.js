import { ingredientsData } from '../data/data.js';
const ul = document.querySelector('ul');

//grab quest data
//loop through quest data
for (let ingredient of ingredientsData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.textContent = ingredientsData.title;
    a.textContent = ingredient.title;

    a.href = '../ingredient/?id=${ingredient.id}';
    li.append(a);
    ul.append(li);
}