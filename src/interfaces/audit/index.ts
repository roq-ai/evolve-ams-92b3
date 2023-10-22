import { AuditItemInterface } from 'interfaces/audit-item';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AuditInterface {
  id?: string;
  audit_date: any;
  user_id: string;
  organization_id: string;
  audit_summary?: string;
  audit_audit_result?: string;
  created_at?: any;
  updated_at?: any;
  audit_item?: AuditItemInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    audit_item?: number;
  };
}

export interface AuditGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  audit_summary?: string;
  audit_audit_result?: string;
}
