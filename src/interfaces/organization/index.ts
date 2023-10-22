import { AuditInterface } from 'interfaces/audit';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  audit?: AuditInterface[];
  user?: UserInterface;
  _count?: {
    audit?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
