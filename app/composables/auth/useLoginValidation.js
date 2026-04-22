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



































// import { useForm } from "vee-validate";
// import * as yup from "yup";

// export function useLoginForm() {
//     const { defineField, handleSubmit, resetForm, errors, setErrors } = useForm({
//         validationSchema: yup.object({
//             login: yup
//                 .string()
//                 .required("Email or phone is required")
//                 .test(
//                     "email-or-phone",
//                     "Please enter a valid email or phone number",
//                     (value) => {
//                         if (!value) return false
//                         const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//                         const isPhone = /^\d{11}$/.test(value)
//                         return isEmail || isPhone
//                     }
//                 )
//                 .label("Email or Phone"),
//             password: yup
//                 .string()
//                 .required("Password is a required field")
//                 .min(8)
//                 .label("Password"),
//         }),
//     });

//     const [login] = defineField("login");
//     const [password] = defineField("password");

//     return {
//         errors,
//         handleSubmit,
//         resetForm,
//         setErrors,
//         login,
//         password,
//     };
// }
