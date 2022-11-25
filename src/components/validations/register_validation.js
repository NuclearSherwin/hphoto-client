import * as yup from "yup";

export const validateRegisterSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "First name at lease 2 character")
      .max(15, "First name not more 15 characters")
      .required("Required"),
    lastName: yup
      .string()
      .min(3, "Last name at lease 2 character")
      .max(15, "Last name not more 15 characters")
      .required("Required"),
    userName: yup
      .string()
      .min(3, "username at lease 2 character")
      .max(15, "username not more 15 characters")
      .required("Required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required!"),
    password: yup.string().required().min(6, "Password at least 6 characters"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Password's not match")
      .required()
      .min(6, "Password at least 6 characters"),
  });