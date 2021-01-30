import { scorePeace } from './score-peace.js';
import { scorePower } from './score-power.js';
import { deadPeaceMessages, alivePeaceMessages, deadOrAliveMessages } from './messages.js';

//get the user from local storage
const user = JSON.parse(localStorage.getItem('USER'));

//get the dom element for the spell results
const spellResults = document.getElementById('spell-results');

//we call a function to put in a number and get a string
const userPeace = scorePeace(user.peace);

//we call a function to put in a number and get a string
const userPower = scorePower(user.power);

//getting wether the user is dead or alive based off their user peace points
const peaceMessage = deadOrAliveMessages[userPeace];

let theMessages = null;
//depending on wether the user is dead or alive get the correct message
if (peaceMessage === 'dead') {
    theMessages = deadPeaceMessages;
} else {
    theMessages = alivePeaceMessages;
}

// get the gold message from the object
const theMessage = theMessages[userPower];

//tell the user their story
const story = `Your spell is complete, ${user.name} the ${user.witch} witch.
${peaceMessage} and ${theMessage}`;

//show the user their spell results
spellResults.textContent = story;

const returnButton = document.querySelector('button');

returnButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});
