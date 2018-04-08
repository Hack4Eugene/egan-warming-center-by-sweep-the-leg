import { Shift } from "./shift";
import { Location } from "./location";

export interface Site {
  id: string;
  location: Location
  siteManagers: string[];
  uniqueGuests: number;
  currentGuests: number;
  maxGuests: number;
  maxPets: number;
  currentPets: number;
  status: string;
  shifts: Shift[];
  walkInCount: number;
  guestCapacity: number;
  petCapacity: number;
  childSite: boolean;
}
