/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let topSuit = document.querySelector(".top-suit");
  let myNumber = document.querySelector(".number");
  let bottomSuit = document.querySelector(".bottom-suit");
  const rankList = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuit = suits[getRandomInteger(suits)];
  topSuit.innerHTML = randomSuit;
  bottomSuit.innerHTML = randomSuit;
  myNumber.innerHTML = rankList[getRandomInteger(rankList)];

  function getRandomInteger(array) {
    return Math.floor(Math.random() * array.length);
  }
};
