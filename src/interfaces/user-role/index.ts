import { GetQueryInterface } from 'interfaces';

export interface UserRoleInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserRoleGetQueryInterface extends GetQueryInterface {
  id?: string;
}
