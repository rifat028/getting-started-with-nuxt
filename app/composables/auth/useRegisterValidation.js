import { useForm } from 'vee-validate'
import * as yup from 'yup'

export const useRegisterValidation = () => {
  // ✅ Schema
  const schema = yup.object({
    name: yup.string().required('Name is required'),

    phone: yup
      .string()
      .matches(/^01\d{9}$/, 'Enter valid 11 digit number starting with 01')
      .required('Phone is required'),

    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),

    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 characters')
      .matches(/[a-z]/, '1 lowercase required')
      .matches(/[A-Z]/, '1 uppercase required')
      .matches(/\d/, '1 number required')
      .matches(/[@$!%*?&]/, '1 special character required'),

    confirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
  })

  // ✅ Form
  const { handleSubmit } = useForm({
    validationSchema: schema
  })

  return {
    handleSubmit
  }
}