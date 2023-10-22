import * as yup from 'yup';

export const auditValidationSchema = yup.object().shape({
  audit_date: yup.date().required(),
  audit_summary: yup.string().nullable(),
  audit_audit_result: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
