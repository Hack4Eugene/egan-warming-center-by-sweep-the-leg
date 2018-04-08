import { Site } from "./site";

export interface Notification {
  id: string;
  site: Site;
  status: string;
  message: string;
}
