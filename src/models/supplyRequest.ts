import { Supply } from "./supply";

export interface SupplyRequest {
  id: string
  siteId: string,
  siteName: string,
  request: Supply[];
  status: string;
}
