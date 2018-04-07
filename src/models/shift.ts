import { Volunteer } from "./volunteer";

export interface Shift {
  id: string;
  siteId: string;
  name: string;
  volunteers: Volunteer[];
}
