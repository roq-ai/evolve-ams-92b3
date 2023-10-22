import * as yup from 'yup';

export const staffMemberValidationSchema = yup.object().shape({
  staff_name: yup.string().required(),
  staff_phone: yup.string().nullable(),
  staff_address: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
