import { Character } from "./character";

export class Kamel extends Character {
  food: string;
  activity: string;
  constructor(
    name: string,
    happinessPoints: number,
    hungerPoints: number,
    thirstPoints: number,
    food: string,
    activity: string
  ) {
    super(name, happinessPoints, hungerPoints, thirstPoints);
    this.food = food;
    this.activity = activity;
  }
  displayFood() {
    console.log(`I like to eat ${this.food} `);
  }
  displayActivity() {
    console.log(`What I like the most is ${this.activity}s`);
  }
}
