console.log("test");

export default class Streamer {
  name: string;
  constructor(name) {
    name = this.name;
  }
}

class Billy extends Streamer {
  food: string = "Donuts";

  changeFoodDisplay() {
    const need = document.querySelector(".need3") as HTMLParagraphElement;
    const feed = document.querySelector(".feed3") as HTMLButtonElement;
    need.textContent = this.food;
    feed.textContent = this.food;
  }
  changePictureDisplay() {
    billyFace.classList.remove("hidden");
  }
  changeFeed1() {
    const feed1 = document.querySelector(".feed1") as HTMLButtonElement;
    const need1 = document.querySelector(".need1") as HTMLParagraphElement;
    feed1.textContent = "LOL";
    need1.textContent = "League of Legends";
  }
  /* makeCharacterAppear() {
    const billyFace = document.querySelector(".billy-face") as HTMLImageElement;
    billyFace.classList.remove(".hidden");
  } */
}

class Kamel extends Streamer {
  activity: string = "Gaming";
  changeActivityDisplay() {
    const activity = document.querySelector(".need1") as HTMLParagraphElement;
    const feed = document.querySelector(".feed1") as HTMLButtonElement;
    activity.textContent = this.activity;
    feed.textContent = this.activity;
  }
  changePictureDisplay() {
    kamelFace.classList.remove("hidden");
  }
  changeFeed3() {
    const feed3 = document.querySelector(".feed3") as HTMLButtonElement;
    const need3 = document.querySelector(".need3") as HTMLParagraphElement;
    feed3.textContent = "Tacos";
    need3.textContent = "Tacos";
  }
  /* makeCharacterAppear() {
    const kamelFace = document.querySelector(".kamel-face") as HTMLImageElement;
    kamelFace.classList.remove(".hidden");
  } */
}
const kamelFace = document.querySelector(".kamel-face") as HTMLImageElement;
const billyFace = document.querySelector(".billy-face") as HTMLImageElement;

let kamelIsSelected: boolean = false;
let billyIsSelected: boolean = false;

const billyChoice = document.querySelector(".billy-choice") as HTMLImageElement;
billyChoice.addEventListener("click", () => {
  billyIsSelected = true;
  kamelIsSelected = false;
  billyChoice.classList.add("selected-border");
  kamelChoice.classList.remove("selected-border");
  console.log(billyIsSelected, kamelIsSelected);
});
const kamelChoice = document.querySelector(".kamel-choice") as HTMLImageElement;
kamelChoice.addEventListener("click", () => {
  kamelIsSelected = true;
  billyIsSelected = false;
  kamelChoice.classList.add("selected-border");
  billyChoice.classList.remove("selected-border");
  console.log(billyIsSelected, kamelIsSelected);
});

const homepage = document.querySelector(".homepage") as HTMLDivElement;
const game = document.querySelector(".game") as HTMLDivElement;

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
    let billy = new Billy("Billy");
    billy.changeFoodDisplay();
    billy.changePictureDisplay();
    billy.changeFeed1();
    console.log(billy.food);
  } else if (billyIsSelected === false && kamelIsSelected === true) {
    let kamel = new Kamel("Kamel");
    kamel.changeActivityDisplay();
    kamel.changePictureDisplay();
    kamel.changeFeed3();
    console.log(kamel.activity);
  }
}
const bars = document.querySelectorAll(
  "progress"
) as NodeListOf<HTMLProgressElement>;

function startInterval() {
  let interval = setInterval(() => {
    bars.forEach((element) => {
      if (element.value <= 0) {
        // console.log(`from 120 interval ID: ${interval}`);
        clearInterval(interval);
        console.log("Game over!");
        gameOver();
      } else if (element.value > 50) {
        element.value = element.value - 10;
        console.log(element.value);
      } else if (element.value > 15 && element.value <= 50) {
        element.value = element.value - 6;
        console.log(element.value);
      } else if (element.value > 0 && element.value <= 20) {
        element.value = element.value - 2;
        console.log(element.value);
      } else {
        console.log("erreur?");
      }
    });
  }, 1500);
  // console.log(`from line 137 interval ID:${interval}`);
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
