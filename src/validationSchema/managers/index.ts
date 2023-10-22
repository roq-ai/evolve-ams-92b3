import * as yup from 'yup';

export const managerValidationSchema = yup.object().shape({
  manager_name: yup.string().required(),
  manager_phone: yup.string().nullable(),
  manager_address: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
