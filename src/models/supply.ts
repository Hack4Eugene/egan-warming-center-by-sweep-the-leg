import { Item } from "./item";

export interface Supply {
  item: Item;
  siteName: string;
  quantity: number;
  status: string;
}
