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
