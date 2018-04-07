import { Shift } from "./shift";

export interface Site {
  id: string;
  location: Location[];
  siteManagers: string[];
  uniqueGuests: number;
  currentGuests: number;
  maxGuests
  maxPets: number;
  currentPets: number;
  status: string;
  shifts: Shift[];
  walkInCount: number;
}
