"use strict";
import { Kamel } from "./kamel";

export class Character {
  name: string;
  happinessPoints: number;
  hungerPoints: number;
  thirstPoints: number;
  constructor(
    name: string,
    happinessPoints: number,
    hungerPoints: number,
    thirstPoints: number
  ) {
    (this.name = name),
      (this.happinessPoints = happinessPoints),
      (this.hungerPoints = hungerPoints),
      (this.thirstPoints = thirstPoints);
  }
}
