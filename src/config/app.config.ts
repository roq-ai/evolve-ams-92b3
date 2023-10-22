interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Auditor', 'Manager', 'Staff Member'],
  tenantName: 'Organization',
  applicationName: 'Evolve AMS',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read audit results',
    'Read audit logs',
    'View organization information',
    'View personal user information',
  ],
  ownerAbilities: [
    'Manage staff department',
    'Manage audit results',
    'Manage audit types',
    'Manage user roles',
    'Manage audit statuses',
    'Manage audit logs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/0414f061-0fac-4d5c-bc11-b1f7dc06587c',
};
