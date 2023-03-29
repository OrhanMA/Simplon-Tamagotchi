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

/* function updateBar() {
  const bars = document.querySelectorAll(
    "progress"
  ) as NodeListOf<HTMLProgressElement>;
  bars.forEach((element) => {
    if (element.value <= 0) {
      gameOver();
      clearInterval(interval);
      console.log("Game over!");
    } else if (element.value > 50) {
      element.value = element.value - 10;
      console.log(element.value);
    } else if (element.value > 15 && element.value <= 50) {
      element.value = element.value - 6;
      console.log(element.value);
    } else if (element.value > 0 && element.value <= 15) {
      element.value = element.value - 2;
      console.log(element.value);
    } else {
      console.log("erreur?");
    }
  });
} */

const faces = document.querySelectorAll(
  ".face"
) as NodeListOf<HTMLImageElement>;
function startInterval() {
  let interval = setInterval(() => {
    /*     updateBar(); */
    const bars = document.querySelectorAll(
      "progress"
    ) as NodeListOf<HTMLProgressElement>;
    bars.forEach((element) => {
      /*  soundListener(element); */
      if (element.value <= 0) {
        gameOver();
        console.log(`from line 49 interval ID: ${interval}`);
        clearInterval(interval);
        console.log("Game over!");
      } else if (element.value > 50) {
        faces[0].classList.remove("hidden");
        faces[1].classList.add("hidden");
        faces[2].classList.add("hidden");
        element.value = element.value - 10;
        console.log(element.value);
      } else if (element.value > 15 && element.value <= 50) {
        faces[0].classList.add("hidden");
        faces[1].classList.remove("hidden");
        faces[2].classList.add("hidden");
        element.value = element.value - 6;
        console.log(element.value);
      } else if (element.value > 0 && element.value <= 20) {
        faces[0].classList.add("hidden");
        faces[1].classList.add("hidden");
        faces[2].classList.remove("hidden");
        element.value = element.value - 2;
        console.log(element.value);
      } else {
        console.log("erreur?");
      }
    });
  }, 1500);
  console.log(`from line 66 interval ID:${interval}`);
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

/* const bar2 = document.getElementById("bar-2") as HTMLProgressElement;
console.log(bar2.value);

const feed2 = document.querySelector(".feed2") as HTMLDivElement;

feed2.addEventListener("click", () => {
  bar2.value += 10;
  console.log(`the bar's value I see is ${bar2.value}`);
});
 */
const bars = document.querySelectorAll(
  "progress"
) as NodeListOf<HTMLProgressElement>;

const feedOptions = document.querySelectorAll(
  ".feed"
) as NodeListOf<HTMLDivElement>;
feedOptions.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("feed1")) {
      bars[0].value += 10;
    }
    if (element.classList.contains("feed2")) {
      bars[1].value += 10;
    }
    if (element.classList.contains("feed3")) {
      bars[2].value += 10;
    } else {
      console.log("this is an error my friend");
    }
  });
});

function gameOver() {
  playSound(lacune.src);
  bars.forEach((element) => {
    if (element.value <= 0) {
      const game = document.querySelector(".game") as HTMLDivElement;
      game.classList.add("hidden");
      const gameOverDiv = document.querySelector(
        ".game-over"
      ) as HTMLDivElement;
      gameOverDiv.classList.remove("hidden");
    } else {
      return;
    }
  });
}

function playSound(audioName) {
  let audio = new Audio(audioName);
  audio.play();
}

let pinaise = document.getElementById("pinaise") as HTMLAudioElement;
let donuts = document.getElementById("donuts") as HTMLAudioElement;
let con = document.getElementById("con") as HTMLAudioElement;
let crasseux = document.getElementById("crasseux") as HTMLAudioElement;
let reuf = document.getElementById("reuf") as HTMLAudioElement;
let lacune = document.getElementById("lacune") as HTMLAudioElement;
let bart = document.getElementById("bart") as HTMLAudioElement;
function soundListener(element) {
  if (element.value === 90) {
    playSound(donuts.src);
  } else if (element.value === 60) {
    playSound(con.src);
  } else if (element.value === 44) {
    playSound(crasseux.src);
  } else if (element.value === 26) {
    playSound(reuf.src);
  } else if (element.value === 12) {
    playSound(lacune.src);
  } else if (element.value === 2) {
    playSound(pinaise.src);
  } else if (element.value === 0) {
    playSound(bart.src);
  }
}
