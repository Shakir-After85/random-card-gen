/* eslint-disable */
import "bootstrap";
import { Button } from "bootstrap";
import "./style.css";

window.onload = () => {
  let topSuit = document.querySelector(".top-suit");
  let myNumber = document.querySelector(".number");
  let bottomSuit = document.querySelector(".bottom-suit");
  const rankList = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuit = suits[getRandomInteger(suits)];
  topSuit.innerHTML = randomSuit;
  bottomSuit.innerHTML = randomSuit;
  myNumber.innerHTML = rankList[getRandomInteger(rankList)];

  // use document.getElementsByClassName or "ById"(array)
  if (randomSuit == suits[0] || randomSuit == suits[1]) {
    document.getElementsByClassName("top-suit")[0].style.color = "red";
    document.getElementsByClassName("bottom-suit")[0].style.color = "red";
  }

  function getRandomInteger(array) {
    return Math.floor(Math.random() * array.length);
  }
};
