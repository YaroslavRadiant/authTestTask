import * as Yup from "yup";

export const signInSchema = Yup.object({
  userName: Yup.string()
    .required("Field required!")
    .max(25, "Maximum length - 25 characters"),
  password: Yup.string()
    .required("Field required!")
    .min(3, "Password is too short - at least 3 characters")
    .max(50, "Maximum length - 50 characters"),
});

export const signUpSchema = Yup.object({
  userName: Yup.string()
    .required("Field required!")
    .max(25, "Maximum length - 25 characters"),
  password: Yup.string()
    .required("Field required!")
    .min(3, "Password is too short - at least 3 characters")
    .max(50, "Maximum length - 50 characters"),
  role: Yup.number()
    .required("Field required!")
    .typeError("Value must be a number!")
    .min(1, "Minimum value - 1")
    .max(3, "Maximum value - 3"),
});
