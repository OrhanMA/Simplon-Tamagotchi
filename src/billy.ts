import Streamer from "./streamer";
import { billySpecialFeed } from "./script";
import { billySpecialNeed } from "./script";
import { billyCurrentNeed } from "./script";
import { billyCurrentFeed } from "./script";

export default class Billy extends Streamer {
  specialNeed = billySpecialNeed;
  specialFeed = billySpecialFeed;
  currentNeed = billyCurrentNeed;
  currentFeed = billyCurrentFeed;
}
