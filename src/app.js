import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {


 const suits = ["♠"," ♥", "♦", "♣"]
 const cardval = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

 
 let randomSuits = suits[Math.floor(Math.random() * suits.length)];
 let randomCardval = cardval[Math.floor(Math.random() * cardval.length)];
 
if (randomSuits === "♥" || randomSuits === "♦") {
document.querySelector(".top-suits").classList.add("text-danger");
document.querySelector(".bottom-suits").classList.add("text-danger");
}



document.querySelector(".top-suits").innerHTML = randomSuits;
document.querySelector(".bottom-suits").innerHTML = randomSuits;
document.querySelector(".cardval").innerHTML = randomCardval;
 


 const refreshButton = document.getElementById('next card');

        // Add a click event listener to the button
        refreshButton.addEventListener('click', function() {
            location.reload(); // Refresh the page

 });
};
