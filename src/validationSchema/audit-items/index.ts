import * as yup from 'yup';

export const auditItemValidationSchema = yup.object().shape({
  item_name: yup.string().required(),
  item_status: yup.string().required(),
  item_description: yup.string().nullable(),
  audit_id: yup.string().nullable().required(),
});
