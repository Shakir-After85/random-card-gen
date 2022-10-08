/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let card = document.querySelector(".card");
  let rank = document.querySelector(".rank");
  const rankList = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["spades", "diamonds", "hearts", "clubs"];
  card.classList.add(suits[getRandomInteger(suits)]);
  rank.innerHTML = rankList[getRandomInteger(rankList)];

  function getRandomInteger(array) {
    return Math.floor(Math.random() * array.length);
  }
};
