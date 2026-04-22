import { useForm } from "vee-validate";
import * as yup from "yup";

export const useRegisterValidation = () => {
  // ✅ Schema
  const schema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[A-Za-z ]+$/, "Name can contain only letters and spaces"),

    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^01/, "Phone must start with 01")
      .test("length-check", function (value) {
        if (!value) return true;
        if (value.length !== 11) {
          return this.createError({
            message: `Phone must be exactly 11 digits. Currently it is ${value.length}`,
          });
        }
        return true;
      }),

    email: yup.string().email("Invalid email").required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum 6 characters")
      .matches(/[a-z]/, "1 lowercase required")
      .matches(/[A-Z]/, "1 uppercase required")
      .matches(/\d/, "1 number required")
      .matches(/[@$!%*?&]/, "1 special character required"),

    confirm: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
  });

  // ✅ Form
  const { handleSubmit } = useForm({
    validationSchema: schema,
  });

  return {
    handleSubmit,
  };
};
