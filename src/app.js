import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
window.onload = function () {
  const suits = [
    { symbol: '♥', className: 'heart' },
    { symbol: '♠', className: 'spade' },
    { symbol: '♣', className: 'club' },
    { symbol: '♦', className: 'diamond' }
  ];

  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const suitIndex = Math.floor(Math.random() * 4);
  const cardIndex = Math.floor(Math.random() * 13);

  const chosenSuit = suits[suitIndex];
  const chosenValue = values[cardIndex];

  const card = document.createElement('div');
  card.className = `card ${chosenSuit.className}`;
  card.textContent = `${chosenValue}${chosenSuit.symbol}`;

  document.getElementById('cardContainer').appendChild(card);
};

