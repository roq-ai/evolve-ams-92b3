import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ManagerInterface {
  id?: string;
  user_id: string;
  manager_name: string;
  manager_phone?: string;
  manager_address?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  manager_name?: string;
  manager_phone?: string;
  manager_address?: string;
}
