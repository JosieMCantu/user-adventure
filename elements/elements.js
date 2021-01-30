import { ingredientsData } from '../data/data.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

//Check if all quests are completed, redirect to results page
//makes collectedAll ingredients true and checks if its ever false
let collectedAll = true;

for (let ingredient of ingredientsData) {
    if (!user.completed[ingredient.id]) {
        collectedAll = false;
    }
}
//makes the user die if they have <= 0 peace points 
//or if they've colledAll ingredients
if (user.peace <= 0 || collectedAll) {
    window.location = '../results';
}

//otherwise get element data and loop through element data
for (let ingredient of ingredientsData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.textContent = ingredientsData.title;
    //titles
    a.textContent = ingredient.title;
    a.href = `../ingredients/?id=${ingredient.id}`;

    li.append(a);
    ul.append(li);

}
