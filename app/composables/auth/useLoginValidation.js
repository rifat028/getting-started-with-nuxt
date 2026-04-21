import { useForm } from 'vee-validate'
import * as yup from 'yup'

export const useLoginValidation = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),

    password: yup
      .string()
      .required('Password is required')
  })

  const { handleSubmit } = useForm({
    validationSchema: schema
  })

  return {
    handleSubmit
  }
}