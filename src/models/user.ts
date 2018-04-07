import { Roles } from './roles';

export interface User {
  uid: string;
  email: string;
  roles: Roles;
}
