import { peace } from './score-peace.js';


//get the user from local storage
const user = JSON.parse(localStorage.getItem('USER'));

//get the dom element for the spell results
const spellResults = document.getElementById('spell-results');

//we need a function to get the user's peace points
const scorePeace = scorePeace();

//we need a function to get the user's power points
const scorePower = scorePower();

