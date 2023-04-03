"use strict";

const homepage = document.querySelector(".homepage") as HTMLDivElement;
const game = document.querySelector(".game") as HTMLDivElement;

const kamelFace = document.querySelector(".kamel-face") as HTMLImageElement;
const billyFace = document.querySelector(".billy-face") as HTMLImageElement;
const bars = document.querySelectorAll(
  "progress"
) as NodeListOf<HTMLProgressElement>;

let kamelIsSelected: boolean = false;
let billyIsSelected: boolean = false;
export default class Streamer {
  name: string;
  face: HTMLImageElement;
  special: string;
  specialNeed: HTMLParagraphElement;
  specialFeed: HTMLButtonElement;
  need: string;
  currentNeed: HTMLParagraphElement;
  currentFeed: HTMLButtonElement;
  constructor(
    name: string,
    face: HTMLImageElement,
    special: string,
    specialNeed: HTMLParagraphElement,
    specialFeed: HTMLButtonElement,
    need: string,
    currentNeed: HTMLParagraphElement,
    currentFeed: HTMLButtonElement
  ) {
    this.name = name;
    this.face = face;
    this.special = special;
    this.specialNeed = specialNeed;
    this.specialFeed = specialFeed;
    this.need = need;
    this.currentNeed = currentNeed;
    this.currentFeed = currentFeed;
  }
  changePictureDisplay() {
    this.face.classList.remove("hidden");
  }
  changeSpecialDisplay() {
    this.specialNeed.textContent = this.special;
    this.specialFeed.textContent = this.special;
  }
  changeFeed() {
    this.currentNeed.textContent = this.need;
    this.currentFeed.textContent = this.need;
  }
  setCharacter() {
    this.changePictureDisplay();
    this.changeSpecialDisplay();
    this.changeFeed();
  }
}

const billySpecialNeed = document.querySelector(
  ".need3"
) as HTMLParagraphElement;
const billySpecialFeed = document.querySelector(".feed3") as HTMLButtonElement;
const billyCurrentNeed = document.querySelector(
  ".need1"
) as HTMLParagraphElement;
const billyCurrentFeed = document.querySelector(".feed1") as HTMLButtonElement;
class Billy extends Streamer {
  specialNeed = billySpecialNeed;
  specialFeed = billySpecialFeed;
  currentNeed = billyCurrentNeed;
  currentFeed = billyCurrentFeed;
}

const kamelSpecialNeed = document.querySelector(
  ".need1"
) as HTMLParagraphElement;
const kamelSpecialFeed = document.querySelector(".feed1") as HTMLButtonElement;
const kamelCurrentNeed = document.querySelector(
  ".need3"
) as HTMLParagraphElement;
const kamelCurrentFeed = document.querySelector(".feed3") as HTMLButtonElement;
class Kamel extends Streamer {
  specialNeed = kamelSpecialNeed;
  specialFeed = kamelSpecialFeed;
  currentNeed = kamelCurrentNeed;
  currentFeed = kamelCurrentFeed;
}

const billyChoice = document.querySelector(".billy-choice") as HTMLImageElement;
billyChoice.addEventListener("click", () => {
  billyIsSelected = true;
  kamelIsSelected = false;
  billyChoice.classList.add("selected-border");
  kamelChoice.classList.remove("selected-border");
});
const kamelChoice = document.querySelector(".kamel-choice") as HTMLImageElement;
kamelChoice.addEventListener("click", () => {
  kamelIsSelected = true;
  billyIsSelected = false;
  kamelChoice.classList.add("selected-border");
  billyChoice.classList.remove("selected-border");
});

const startButton = document.querySelector(
  ".start-button"
) as HTMLButtonElement;
startButton.addEventListener("click", () => {
  if (billyIsSelected !== kamelIsSelected) {
    homepage.classList.add("hidden");
    game.classList.remove("hidden");
    displayRightCharacter();
    startInterval();
    feed("bar1", "feed1");
    feed("bar2", "feed2");
    feed("bar3", "feed3");
  } else {
    alert("Please pick a character to play Button");
  }
});

function displayRightCharacter() {
  if (billyIsSelected === true && kamelIsSelected === false) {
    let billy = new Billy(
      "Billy",
      billyFace,
      "Donuts",
      billySpecialNeed,
      billySpecialFeed,
      "LOL",
      billyCurrentNeed,
      billyCurrentFeed
    );
    billy.setCharacter();
  } else if (billyIsSelected === false && kamelIsSelected === true) {
    let kamel = new Kamel(
      "Kamel",
      kamelFace,
      "Gaming",
      kamelSpecialNeed,
      kamelSpecialFeed,
      "Tacos",
      kamelCurrentNeed,
      kamelCurrentFeed
    );
    kamel.setCharacter();
  }
}

function startInterval() {
  let interval = setInterval(() => {
    bars.forEach((element) => {
      if (element.value <= 0) {
        clearInterval(interval);
        gameOver();
      } else if (element.value > 50) {
        element.value = element.value - 10;
      } else if (element.value > 15 && element.value <= 50) {
        element.value = element.value - 6;
      } else if (element.value > 0 && element.value <= 20) {
        element.value = element.value - 2;
      } else {
      }
    });
  }, 1500);
}

function gameOver() {
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

const againButton = document.querySelector("#again") as HTMLButtonElement;
againButton.addEventListener("click", () => {
  location.reload();
});

function feed(bar: string, feed: string) {
  const feedButton = document.querySelector(`.${feed}`) as HTMLButtonElement;
  feedButton.addEventListener("click", () => {
    const needBar = document.querySelector(`#${bar}`) as HTMLProgressElement;
    needBar.value = needBar.value + 10;
  });
}
