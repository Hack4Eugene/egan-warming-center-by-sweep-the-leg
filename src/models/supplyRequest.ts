import { Item } from "./item";
import { Supply } from "./supply";

export interface SupplyRequest {
  id:string
  siteId:string,
  siteName:string,
  request: Supply[];
}
