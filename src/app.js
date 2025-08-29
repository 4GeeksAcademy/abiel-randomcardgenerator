import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 let suits = ['clubs', 'hearts', 'diamonds', 'spades'];
 let cardval = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

 

 
 console.log(suits[Math.floor(Math.random() * suits.length)])
 console.log(cardval[Math.floor(Math.random() * cardval.length)])

  console.log("Hello Rigo from the console!");
};
