import { GetQueryInterface } from 'interfaces';

export interface AuditStatusInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AuditStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
}
