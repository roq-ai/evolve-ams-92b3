import { GetQueryInterface } from 'interfaces';

export interface StaffDepartmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface StaffDepartmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
