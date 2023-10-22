import { AuditInterface } from 'interfaces/audit';
import { GetQueryInterface } from 'interfaces';

export interface AuditItemInterface {
  id?: string;
  audit_id: string;
  item_name: string;
  item_status: string;
  item_description?: string;
  created_at?: any;
  updated_at?: any;

  audit?: AuditInterface;
  _count?: {};
}

export interface AuditItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  audit_id?: string;
  item_name?: string;
  item_status?: string;
  item_description?: string;
}
