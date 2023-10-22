import { GetQueryInterface } from 'interfaces';

export interface AuditResultInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AuditResultGetQueryInterface extends GetQueryInterface {
  id?: string;
}
