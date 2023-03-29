"use strict";

import { Character } from "./character";
import { Kamel } from "./kamel";

const startButton = document.querySelector(
  ".start-button"
) as HTMLButtonElement;

startButton.addEventListener("click", () => {
  hideHomepage();
  displayGame();
  playSound(pinaise.src);
  startInterval();
});

function startInterval() {
  let interval = setInterval(() => {
    if (bar1.value <= 0) {
      /*     playSound(pinaise.src); */
      console.log("Game over!");
    } else if (bar1.value > 50) {
      bar1.value = bar1.value - 10;
      console.log(bar1.value);
    } else if (bar1.value > 15 && bar1.value <= 50) {
      bar1.value = bar1.value - 6;
      console.log(bar1.value);
    } else if (bar1.value > 0 && bar1.value <= 15) {
      bar1.value = bar1.value - 2;
      console.log(bar1.value);
    } else {
      console.log("erreur?");
    }
  }, 1500);
  return interval;
}

function hideHomepage() {
  const homepage = document.querySelector(".homepage") as HTMLDivElement;
  const rules = document.querySelector(".rules") as HTMLDivElement;
  homepage.classList.add("hidden");
  rules.classList.add("hidden");
}

function displayGame() {
  const game = document.querySelector(".game") as HTMLDivElement;
  game.classList.remove("hidden");
}

let kamel = new Kamel("Kamel", 100, 100, 100, "Kebab", "Game");

kamel.displayFood();
kamel.displayActivity();

function playSound(audioName) {
  let audio = new Audio(audioName);
  audio.play();
}

let pinaise = document.getElementById("pinaise") as HTMLAudioElement;

const bar1 = document.getElementById("bar-1") as HTMLProgressElement;
console.log(bar1.value);

const water = document.querySelector(".water") as HTMLDivElement;

water.addEventListener("click", () => {
  bar1.value += 10;
  console.log(`the bar's value I see is ${bar1.value}`);
});
