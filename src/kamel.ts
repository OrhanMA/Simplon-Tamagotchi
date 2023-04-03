import Streamer from "./streamer";
import { kamelSpecialNeed } from "./script";
import { kamelSpecialFeed } from "./script";
import { kamelCurrentNeed } from "./script";
import { kamelCurrentFeed } from "./script";

export default class Kamel extends Streamer {
  specialNeed = kamelSpecialNeed;
  specialFeed = kamelSpecialFeed;
  currentNeed = kamelCurrentNeed;
  currentFeed = kamelCurrentFeed;
}
